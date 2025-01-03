const quests = [
    { trader: 'jaeger', name: 'Acquaintance', key: 'acquaintance', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Acquaintance' },
    { trader: 'jaeger', name: 'The Survivalist Path - Unprotected but Dangerous', key: 'sp_u_d', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Survivalist_Path_-_Unprotected_but_Dangerous' },
    { trader: 'jaeger', name: 'The Survivalist Path - Thrifty', key: 'sp_thrifty', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Survivalist_Path_-_Thrifty' },
    { trader: 'jaeger', name: 'The Survivalist Path - Zhivchik', key: 'sp_zhivchik', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Survivalist_Path_-_Zhivchik' },
    { trader: 'jaeger', name: 'The Survivalist Path - Wounded Beast', key: 'sp_w_b', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Survivalist_Path_-_Wounded_Beast' },
    { trader: 'jaeger', name: 'The Survivalist Path - Tough Guy', key: 'sp_t_g', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Survivalist_Path_-_Tough_Guy' },
    { trader: 'jaeger', name: 'The Survivalist Path - Junkie', key: 'sp_junkie', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Survivalist_Path_-_Junkie' },
    { trader: 'jaeger', name: 'The Survivalist Path - Eagle Owl', key: 'sp_e_o', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Survivalist_Path_-_Eagle-Owl' },
    { trader: 'jaeger', name: 'The Survivalist Path - Cobat Medic', key: 'sp_c_m', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Survivalist_Path_-_Combat_Medic' },
    { trader: 'jaeger', name: 'Ambulance', key: 'ambulance', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Ambulance' },
    { trader: 'jaeger', name: 'The Huntsman Path - Secured Perimiter', key: 'thp_sp', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Huntsman_Path_-_Secured_Perimeter' },
    { trader: 'jaeger', name: 'The Huntsman Path - Forest Cleaning', key: 'thp_f_c', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Huntsman_Path_-_Forest_Cleaning' },
    { trader: 'jaeger', name: 'The Huntsman Path - Controller', key: 'thp_controller', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Huntsman_Path_-_Controller' },
    { trader: 'jaeger', name: 'The Huntsman Path - Evil Watchman', key: 'thp_e_w', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Huntsman_Path_-_Evil_Watchman' },
    { trader: 'jaeger', name: 'The Huntsman Path - Trophy', key: 'thp_trophy', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Huntsman_Path_-_Trophy' },
    { trader: 'jaeger', name: 'The Huntsman Path - Justice', key: 'thp_justice', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Huntsman_Path_-_Justice' },
    { trader: 'jaeger', name: 'The Huntsman Path - Sellout', key: 'thp_sellout', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Huntsman_Path_-_Sellout' },
    { trader: 'jaeger', name: 'The Huntsman Path - Woods Keeper', key: 'thp_w_k', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Huntsman_Path_-_Woods_Keeper' },
    { trader: 'jaeger', name: 'The Huntsman Path - Factory Chief', key: 'thp_f_c_2', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Huntsman_Path_-_Factory_Chief' },
    { trader: 'jaeger', name: 'The Huntsman Path - Eraser - Part 1', key: 'thp_e_1', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Huntsman_Path_-_Eraser_-_Part_1' },
    { trader: 'jaeger', name: 'The Huntsman Path - Eraser - Part 2', key: 'thp_e_2', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Huntsman_Path_-_Eraser_-_Part_2' },
    { trader: 'jaeger', name: 'Courtesy Visit', key: 'courtesy_visit', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Courtesy_Visit' },
    { trader: 'jaeger', name: 'Nostalgia', key: 'nostalgia', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Nostalgia' },
    { trader: 'jaeger', name: 'Reserve', key: 'reserve', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Reserve_(quest)' },
    { trader: 'jaeger', name: 'Claustrophobia', key: 'claustrophobia', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Claustrophobia' },
    { trader: 'jaeger', name: 'Fishing Place', key: 'fishing_place', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Fishing_Place' },
    { trader: 'jaeger', name: 'Hunting Trip', key: 'hunting_trip', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Hunting_Trip' },
    { trader: 'jaeger', name: 'Rough Tarkov', key: 'rough_tarkov', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Rough_Tarkov' },
    { trader: 'jaeger', name: 'Every Hunter Knows This', key: 'e_h_k_t', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Every_Hunter_Knows_This' },
    { trader: 'jaeger', name: 'Shady Business', key: 'shady_business', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Shady_Business' },
    { trader: 'jaeger', name: 'Pest Control', key: 'pest_control', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Pest_Control' },
    { trader: 'jaeger', name: 'The Hermit', key: 'the_hermit', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Hermit' },
    { trader: 'jaeger', name: 'Stray Dogs', key: 'stray_dogs', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Stray_Dogs' },
    { trader: 'jaeger', name: 'The Delicious Sausage', key: 't_d_s', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Delicious_Sausage' },
    { trader: 'jaeger', name: 'Dragnet', key: 'dragnet', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Dragnet' },
    { trader: 'jaeger', name: 'The Tarkov Shooter - Part 1', key: 't_s_1', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Tarkov_Shooter_-_Part_1' },
    { trader: 'jaeger', name: 'The Tarkov Shooter - Part 2', key: 't_s_2', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Tarkov_Shooter_-_Part_2' },
    { trader: 'jaeger', name: 'The Tarkov Shooter - Part 3', key: 't_s_3', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Tarkov_Shooter_-_Part_3' },
    { trader: 'jaeger', name: 'The Tarkov Shooter - Part 4', key: 't_s_4', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Tarkov_Shooter_-_Part_4' },
    { trader: 'jaeger', name: 'The Tarkov Shooter - Part 5', key: 't_s_5', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Tarkov_Shooter_-_Part_5' },
    { trader: 'jaeger', name: 'The Tarkov Shooter - Part 6', key: 't_s_6', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Tarkov_Shooter_-_Part_6' },
    { trader: 'jaeger', name: 'The Tarkov Shooter - Part 7', key: 't_s_7', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Tarkov_Shooter_-_Part_7' },
    { trader: 'jaeger', name: 'The Tarkov Shooter - Part 8', key: 't_s_8', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Tarkov_Shooter_-_Part_8' }
]

export default quests;