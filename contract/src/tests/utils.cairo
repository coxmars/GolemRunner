pub mod utils {
    // Starknet imports
    use starknet::testing::{set_contract_address, set_account_contract_address, set_block_timestamp};
    use starknet::{ContractAddress};
    
    // Dojo imports
    use dojo_cairo_test::WorldStorageTestTrait;
    use dojo::world::{WorldStorageTrait, WorldStorage};
    use dojo_cairo_test::{
        spawn_test_world, NamespaceDef, TestResource, ContractDefTrait, ContractDef,
    };

    // System imports
    use golem_runner::systems::game::{game, IGameDispatcher};

    // Models imports
    use golem_runner::models::world::{m_World};
    use golem_runner::models::golem::{m_Golem};
    use golem_runner::models::player::{m_Player};
    use golem_runner::models::ranking::{m_Ranking};
    use golem_runner::models::mission::{m_Mission};

    // ------- Constants -------
    pub fn PLAYER() -> ContractAddress {
        starknet::contract_address_const::<'PLAYER'>()
    }

     // ------- Definitions -------
    pub fn namespace_def() -> NamespaceDef {
        let ndef = NamespaceDef {
            namespace: "golem_runner",
            resources: [
                TestResource::Model(m_World::TEST_CLASS_HASH),
                TestResource::Model(m_Golem::TEST_CLASS_HASH),
                TestResource::Model(m_Player::TEST_CLASS_HASH),
                TestResource::Model(m_Ranking::TEST_CLASS_HASH),
                TestResource::Model(m_Mission::TEST_CLASS_HASH),
                TestResource::Event(achievement::events::index::e_TrophyCreation::TEST_CLASS_HASH),
                TestResource::Event(achievement::events::index::e_TrophyProgression::TEST_CLASS_HASH),
                TestResource::Contract(game::TEST_CLASS_HASH),
            ].span(),
        };

        ndef
    }

    pub fn contract_defs() -> Span<ContractDef> {
        [
            ContractDefTrait::new(@"golem_runner", @"game")
                .with_writer_of([dojo::utils::bytearray_hash(@"golem_runner")].span()),
                
        ]
            .span()
    }

    pub fn create_game_system(world: WorldStorage) -> IGameDispatcher {
         let (contract_address, _) = world.dns(@"game").unwrap();

         let game_system = IGameDispatcher { contract_address };

         game_system
    }

    pub fn create_test_world() -> WorldStorage {
         // Initialize test environment
         let ndef = namespace_def();

         // Register the resources.
         let mut world = spawn_test_world([ndef].span());
 
         // Ensures permissions and initializations are synced.
         world.sync_perms_and_inits(contract_defs());

         world
    }
    

    // ------- Custom cheat functions -------

    // set_contract_address: used to define the address of the calling contract,
    // set_account_contract_address: used to define the address of the account used for the current
    // transaction.
    pub fn cheat_caller_address(address: ContractAddress) {
        set_contract_address(address);
        set_account_contract_address(address);
    }

    pub fn cheat_block_timestamp(timestamp: u64) {
        set_block_timestamp(timestamp);
    }

     // ------- Events testing functions -------
    pub fn drop_all_events(address: ContractAddress) {
        loop {
            match starknet::testing::pop_log_raw(address) {
                core::option::Option::Some(_) => {},
                core::option::Option::None => { break; },
            };
        }
    }
    
}
