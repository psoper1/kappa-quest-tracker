const quests = [
    { trader: 'peacekeeper', name: 'Fishing Gear', key: 'fishing_gear', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Fishing_Gear' },
    { trader: 'peacekeeper', name: 'Tigr Safari', key: 'tigr_safari', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Tigr_Safari' },
    { trader: 'peacekeeper', name: 'Scrap Metal', key: 'scrap_metal', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Scrap_Metal' },
    { trader: 'peacekeeper', name: 'Eagle Eye', key: 'eagle_eye', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Eagle_Eye' },
    { trader: 'peacekeeper', name: 'Humanitarian Supplies', key: 'humanitarian_supplies', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Humanitarian_Supplies' },
    { trader: 'peacekeeper', name: 'The Cult - Part 1', key: 'the_cult_part_1', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Cult_-_Part_1' },
    { trader: 'peacekeeper', name: 'The Cult - Part 2', key: 'the_cult_part_2', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Cult_-_Part_2' },
    { trader: 'peacekeeper', name: 'Spa Tour - Part 1', key: 'spa_tour_part_1', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Spa_Tour_-_Part_1' },
    { trader: 'peacekeeper', name: 'Spa Tour - Part 2', key: 'spa_tour_part_2', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Spa_Tour_-_Part_2' },
    { trader: 'peacekeeper', name: 'Spa Tour - Part 3', key: 'spa_tour_part_3', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Spa_Tour_-_Part_3' },
    { trader: 'peacekeeper', name: 'Spa Tour - Part 4', key: 'spa_tour_part_4', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Spa_Tour_-_Part_4' },
    { trader: 'peacekeeper', name: 'Spa Tour - Part 5', key: 'spa_tour_part_5', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Spa_Tour_-_Part_5' },
    { trader: 'peacekeeper', name: 'Spa Tour - Part 6', key: 'spa_tour_part_6', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Spa_Tour_-_Part_6' },
    { trader: 'peacekeeper', name: 'Spa Tour - Part 7', key: 'spa_tour_part_7', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Spa_Tour_-_Part_7' },
    { trader: 'peacekeeper', name: 'Cargo X - Part 1', key: 'cargo_x_part_1', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Cargo_X_-_Part_1' },
    { trader: 'peacekeeper', name: 'Cargo X - Part 2', key: 'cargo_x_part_2', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Cargo_X_-_Part_2' },
    { trader: 'peacekeeper', name: 'Cargo X - Part 3', key: 'cargo_x_part_3', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Cargo_X_-_Part_3' },
    { trader: 'peacekeeper', name: 'Cargo X - Part 4', key: 'cargo_x_part_4', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Cargo_X_-_Part_4' },
    { trader: 'peacekeeper', name: 'Wet Job - Part 1', key: 'wet_job_part_1', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Wet_Job_-_Part_1' },
    { trader: 'peacekeeper', name: 'Wet Job - Part 2', key: 'wet_job_part_2', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Wet_Job_-_Part_2' },
    { trader: 'peacekeeper', name: 'Wet Job - Part 3', key: 'wet_job_part_3', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Wet_Job_-_Part_3' },
    { trader: 'peacekeeper', name: 'Wet Job - Part 4', key: 'wet_job_part_4', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Wet_Job_-_Part_4' },
    { trader: 'peacekeeper', name: 'Wet Job - Part 5', key: 'wet_job_part_5', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Wet_Job_-_Part_5' },
    { trader: 'peacekeeper', name: 'Wet Job - Part 6', key: 'wet_job_part_6', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Wet_Job_-_Part_6' },
    { trader: 'peacekeeper', name: 'The Guide', key: 'the_guide', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/The_Guide' },
    { trader: 'peacekeeper', name: 'Samnples', key: 'samples', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Samples' },
    { trader: 'peacekeeper', name: 'TerraGroup Employee', key: 'terragroup_employee', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/TerraGroup_Employee' },
    { trader: 'peacekeeper', name: 'Lend Lease - Part 2', key: 'lend_lease_part_2', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Lend-Lease_-_Part_2' },
    { trader: 'peacekeeper', name: 'Peacekeeping Mission', key: 'peacekeeping_mission', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Peacekeeping_Mission' },
    { trader: 'peacekeeper', name: 'Classified Technologies', key: 'classified_technologies', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Classified_Technologies' },
    { trader: 'peacekeeper', name: 'Revision - Reserve', key: 'revision_reserve', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Revision_-_Reserve' },
    { trader: 'peacekeeper', name: 'Insomnia', key: 'insomnia', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Insomnia' },
    { trader: 'peacekeeper', name: 'Overpopulation', key: 'overpopulation', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Overpopulation' },
    { trader: 'peacekeeper', name: 'Revision - Lighthouse', key: 'revision_lighthouse', wikiLink: 'https://escapefromtarkov.fandom.com/wiki/Revision_-_Lighthouse' },
]

export default quests;