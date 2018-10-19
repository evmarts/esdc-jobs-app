import React from "react";
import response from "../response";
import axios from "axios";

const json = {
  result: [
    {
      sub_noc: "1414.1",
      sub_noc_title: "Receptionists",
      sub_noc_description:
        "Receptionists greet people arriving at offices, hospitals and other establishments, direct visitors to appropriate persons and services, answer and forward telephone calls, take messages, schedule appointments and perform other clerical duties.",
      example_titles: ["receptionist", "business receptionist"],
      profile_summary: {
        aptitudes: {
          aptitudes_g: 3,
          aptitudes_v: 3,
          aptitudes_n: 4,
          aptitudes_s: 4,
          aptitudes_p: 4,
          aptitudes_q: 3,
          aptitudes_k: 3,
          aptitudes_f: 3,
          aptitudes_m: 4
        },
        physical: {
          vision_value: 2,
          colour_value: 0,
          hearing_value: 2,
          body_position_value: 1,
          limb_coordination_value: 1,
          strength_value: 1
        },
        environment: "L1",
        interests: ["S", "M", "d"],
        dpt: {
          data_value: 3,
          people_value: 6,
          things_value: 7
        },
        et_value: "3"
      },
      descriptor_profile: {
        main_characteristics: [
          "<b>General learning</b> and <b>verbal ability</b> to greet people coming into establishments and determine the appropriate contacts and services they require",
          "<b>Clerical perception</b> to take messages; may receive and record payments in ledgers",
          "<b>Motor co-ordination</b> and <b>finger dexterity</b> to answer and forward telephone calls; may operate office equipment",
          "<b>Social interest</b> in <b>speaking</b> to greet people and provide information in person and by phone",
          "<b>Methodical interest</b> in <b>compiling</b> information to schedule appointments for employers; may perform clerical duties such as filing, and collecting and distributing mail and messages; may maintain security access lists",
          "<b>Directive interest</b> in <b>handling</b> equipment such as telephones and computers; and in directing clients and customers to appropriate contacts and services; and may maintain front desk security"
        ]
      },
      physical_activities: {
        physical: {
          vision: {
            name: "Vision",
            value: 2,
            title: "Near vision"
          },
          colour: {
            name: "Colour Discrimination",
            value: 0,
            title: "Not relevant"
          },
          hearing: {
            name: "Hearing",
            value: 2,
            title: "Verbal interaction"
          },
          body_position: {
            name: "Body Position",
            value: 1,
            title: "Sitting"
          },
          limb_coordination: {
            name: "Limb Co-ordination",
            value: 1,
            title: "Upper limb co-ordination"
          },
          strength: {
            name: "Strength",
            value: 1,
            title: "Limited"
          }
        },
        environment: {
          value: "L1",
          title: "Regulated inside climate"
        }
      },
      employment_requirements: {
        et_value: "3"
      },
      workplace_and_employers:
        "Offices throughout the private and public sectors"
    },
    {
      sub_noc: "1414.2",
      sub_noc_title: "Hospital Admitting Clerks",
      sub_noc_description:
        "Hospital admitting clerks greet people arriving at hospitals and obtain information to direct them to medical service areas.",
      example_titles: ["hospital admitting clerk"],
      profile_summary: {
        aptitudes: {
          aptitudes_g: 3,
          aptitudes_v: 3,
          aptitudes_n: 4,
          aptitudes_s: 4,
          aptitudes_p: 4,
          aptitudes_q: 3,
          aptitudes_k: 3,
          aptitudes_f: 3,
          aptitudes_m: 4
        },
        physical: {
          vision_value: 2,
          colour_value: 0,
          hearing_value: 2,
          body_position_value: 1,
          limb_coordination_value: 1,
          strength_value: 1
        },
        environment: "L1",
        interests: ["S", "M", "d"],
        dpt: {
          data_value: 3,
          people_value: 6,
          things_value: 7
        },
        et_value: "3"
      },
      descriptor_profile: {
        main_characteristics: [
          "<b>Social interest</b> in <b>speaking</b> to patients or their representatives to explain and provide written information regarding regulations such as visiting hours, payment of accounts and schedules of charges",
          "<b>Motor co-ordination</b> and <b>finger dexterity</b> to answer telephone calls and type admitting records",
          "<b>General learning</b> and <b>verbal ability</b> to interview patients or their representatives in order to obtain and process information required to provide hospital and medical services",
          "<b>Clerical perception</b> to record information accurately; may receive payment on accounts",
          "<b>Directive interest</b> in <b>handling</b> equipment such as telephones and computers to provide general information concerning patient care; and in obtaining signed consent statements from patients for treatments and in assigning patients to rooms",
          "<b>Methodical interest</b> in <b>compiling</b> information to schedule appointments for examinations according to nature of illnesses; and in routing admitting records to designated departments"
        ]
      },
      physical_activities: {
        physical: {
          vision: {
            name: "Vision",
            value: 2,
            title: "Near vision"
          },
          colour: {
            name: "Colour Discrimination",
            value: 0,
            title: "Not relevant"
          },
          hearing: {
            name: "Hearing",
            value: 2,
            title: "Verbal interaction"
          },
          body_position: {
            name: "Body Position",
            value: 1,
            title: "Sitting"
          },
          limb_coordination: {
            name: "Limb Co-ordination",
            value: 1,
            title: "Upper limb co-ordination"
          },
          strength: {
            name: "Strength",
            value: 1,
            title: "Limited"
          }
        },
        environment: {
          value: "L1",
          title: "Regulated inside climate"
        }
      },
      employment_requirements: {
        et_value: "3"
      },
      workplace_and_employers: "Hospitals"
    },
    {
      sub_noc: "1414.4",
      sub_noc_title: "Switchboard Operators",
      sub_noc_description:
        "Switchboard operators answer and forward telephone calls, take messages, schedule appointments and perform other clerical duties.",
      example_titles: ["switchboard operator"],
      profile_summary: {
        aptitudes: {
          aptitudes_g: 3,
          aptitudes_v: 3,
          aptitudes_n: 4,
          aptitudes_s: 4,
          aptitudes_p: 4,
          aptitudes_q: 3,
          aptitudes_k: 3,
          aptitudes_f: 3,
          aptitudes_m: 4
        },
        physical: {
          vision_value: 2,
          colour_value: 0,
          hearing_value: 2,
          body_position_value: 1,
          limb_coordination_value: 1,
          strength_value: 1
        },
        environment: "L1",
        interests: ["S", "M", "d"],
        dpt: {
          data_value: 5,
          people_value: 6,
          things_value: 4
        },
        et_value: "3"
      },
      descriptor_profile: {
        main_characteristics: [
          "<b>Social interest</b> in <b>speaking</b> to provide information",
          "<b>Clerical perception</b> to record messages",
          "<b>Directive interest</b> in <b>operating</b> telephone systems and switchboards to screen and forward telephone calls",
          "<b>Motor co-ordination</b> and <b>finger dexterity</b> to use telephone systems and switchboards; may operate computers",
          "<b>Methodical interest</b> in <b>copying</b> information to take messages; may keep records of calls placed and toll charges",
          "<b>General learning</b> and <b>verbal ability</b> to relay incoming, outgoing and inter-office calls"
        ]
      },
      physical_activities: {
        physical: {
          vision: {
            name: "Vision",
            value: 2,
            title: "Near vision"
          },
          colour: {
            name: "Colour Discrimination",
            value: 0,
            title: "Not relevant"
          },
          hearing: {
            name: "Hearing",
            value: 2,
            title: "Verbal interaction"
          },
          body_position: {
            name: "Body Position",
            value: 1,
            title: "Sitting"
          },
          limb_coordination: {
            name: "Limb Co-ordination",
            value: 1,
            title: "Upper limb co-ordination"
          },
          strength: {
            name: "Strength",
            value: 1,
            title: "Limited"
          }
        },
        environment: {
          value: "L1",
          title: "Regulated inside climate"
        }
      },
      employment_requirements: {
        et_value: "3"
      },
      workplace_and_employers: "Hospitals"
    },
    {
      sub_noc: "1414.5",
      sub_noc_title: "Answering Service Operators",
      sub_noc_description:
        "Answering service operators answer and forward telephone calls and take and relay messages.",
      example_titles: ["answering service operator", "telereceptionist"],
      profile_summary: {
        aptitudes: {
          aptitudes_g: 3,
          aptitudes_v: 3,
          aptitudes_n: 4,
          aptitudes_s: 4,
          aptitudes_p: 4,
          aptitudes_q: 3,
          aptitudes_k: 3,
          aptitudes_f: 3,
          aptitudes_m: 4
        },
        physical: {
          vision_value: 2,
          colour_value: 0,
          hearing_value: 2,
          body_position_value: 1,
          limb_coordination_value: 1,
          strength_value: 1
        },
        environment: "L1",
        interests: ["S", "M", "d"],
        dpt: {
          data_value: 5,
          people_value: 6,
          things_value: 4
        },
        et_value: "3"
      },
      descriptor_profile: {
        main_characteristics: [
          "<b>Clerical perception</b> to record, date stamp and file messages",
          "<b>General learning ability</b> to provide answering services for clients",
          "<b>Verbal ability</b> to greet callers and provide names and phone numbers of clients' offices and establishments",
          "<b>Social interest</b> in <b>speaking</b> to provide information, deliver messages and relay calls",
          "<b>Motor co-ordination</b> and <b>finger dexterity</b> to use telephone switchboards to place calls at clients' requests",
          "<b>Methodical interest</b> in <b>copying</b> information to record and relay messages",
          "<b>Directive interest</b> in <b>operating</b> telephone switchboards to locate clients in emergencies"
        ]
      },
      physical_activities: {
        physical: {
          vision: {
            name: "Vision",
            value: 2,
            title: "Near vision"
          },
          colour: {
            name: "Colour Discrimination",
            value: 0,
            title: "Not relevant"
          },
          hearing: {
            name: "Hearing",
            value: 2,
            title: "Verbal interaction"
          },
          body_position: {
            name: "Body Position",
            value: 1,
            title: "Sitting"
          },
          limb_coordination: {
            name: "Limb Co-ordination",
            value: 1,
            title: "Upper limb co-ordination"
          },
          strength: {
            name: "Strength",
            value: 1,
            title: "Limited"
          }
        },
        environment: {
          value: "L1",
          title: "Regulated inside climate"
        }
      },
      employment_requirements: {
        et_value: "3"
      },
      workplace_and_employers: "Hospitals"
    },
    {
      sub_noc: "1414.6",
      sub_noc_title: "Reception Desk Clerks (Except Hotel)",
      sub_noc_description:
        "Reception desk clerks direct customers to appropriate areas in a variety of institutional and commercial settings, record bookings, handle credit card checks, receive payment, issue receipts, arrange tour reservations and deal with emergency situations.",
      example_titles: ["appointment clerk", "office reception clerk"],
      profile_summary: {
        aptitudes: {
          aptitudes_g: 3,
          aptitudes_v: 3,
          aptitudes_n: 4,
          aptitudes_s: 4,
          aptitudes_p: 4,
          aptitudes_q: 3,
          aptitudes_k: 3,
          aptitudes_f: 3,
          aptitudes_m: 4
        },
        physical: {
          vision_value: 2,
          colour_value: 0,
          hearing_value: 2,
          body_position_value: 1,
          limb_coordination_value: 1,
          strength_value: 1
        },
        environment: "L1",
        interests: ["S", "M", "d"],
        dpt: {
          data_value: 3,
          people_value: 6,
          things_value: 7
        },
        et_value: "3"
      },
      descriptor_profile: {
        main_characteristics: [
          "<b>Social interest</b> in <b>speaking</b> to greet customers and provide information",
          "<b>Motor co-ordination</b> and <b>finger dexterity</b> to operate computers",
          "<b>Methodical interest</b> in <b>compiling</b> information to arrange tour reservations",
          "<b>Clerical perception</b> to record bookings, receive payments and issue receipts",
          "<b>General learning</b> and <b>verbal ability</b> to greet customers and direct them to appropriate areas",
          "<b>Directive interest</b> in <b>handling</b> equipment such as telephones and computers; in handling credit card checks; and in dealing with emergency situations"
        ]
      },
      physical_activities: {
        physical: {
          vision: {
            name: "Vision",
            value: 2,
            title: "Near vision"
          },
          colour: {
            name: "Colour Discrimination",
            value: 0,
            title: "Not relevant"
          },
          hearing: {
            name: "Hearing",
            value: 2,
            title: "Verbal interaction"
          },
          body_position: {
            name: "Body Position",
            value: 1,
            title: "Sitting"
          },
          limb_coordination: {
            name: "Limb Co-ordination",
            value: 1,
            title: "Upper limb co-ordination"
          },
          strength: {
            name: "Strength",
            value: 1,
            title: "Limited"
          }
        },
        environment: {
          value: "L1",
          title: "Regulated inside climate"
        }
      },
      employment_requirements: {
        et_value: "3"
      },
      workplace_and_employers:
        "Offices throughout the private and public sectors"
    },
    {
      sub_noc: "1414.3",
      sub_noc_title: "Medical and Dental Receptionists",
      sub_noc_description:
        "Medical and dental receptionists greet patients and direct them to appropriate services, answer and forward telephone calls, take messages, schedule appointments and perform other clerical duties.",
      example_titles: ["medical receptionist", "dental receptionist"],
      profile_summary: {
        aptitudes: {
          aptitudes_g: 3,
          aptitudes_v: 3,
          aptitudes_n: 4,
          aptitudes_s: 4,
          aptitudes_p: 4,
          aptitudes_q: 3,
          aptitudes_k: 3,
          aptitudes_f: 3,
          aptitudes_m: 4
        },
        physical: {
          vision_value: 2,
          colour_value: 0,
          hearing_value: 2,
          body_position_value: 1,
          limb_coordination_value: 1,
          strength_value: 1
        },
        environment: "L1",
        interests: ["S", "M", "d"],
        dpt: {
          data_value: 3,
          people_value: 6,
          things_value: 7
        },
        et_value: "3"
      },
      descriptor_profile: {
        main_characteristics: [
          "<b>Methodical interest</b> in <b>compiling</b> information to maintain billing systems",
          "<b>Social interest</b> in <b>speaking</b> to arrange appointments and announce patients' arrivals",
          "<b>Directive interest</b> in <b>handling</b> equipment such as telephones and computers; in removing and arranging patients' charts and records according to daily appointment schedules; and in directing patients to examination and treatment areas",
          "<b>General learning</b> and <b>verbal ability</b> to greet people coming into medical and dental offices and to determine their requirements",
          "<b>Clerical perception</b> to receive and record payment for services",
          "<b>Motor co-ordination</b> and <b>finger dexterity</b> to answer and forward telephone calls; and to operate computerized systems"
        ]
      },
      physical_activities: {
        physical: {
          vision: {
            name: "Vision",
            value: 2,
            title: "Near vision"
          },
          colour: {
            name: "Colour Discrimination",
            value: 0,
            title: "Not relevant"
          },
          hearing: {
            name: "Hearing",
            value: 2,
            title: "Verbal interaction"
          },
          body_position: {
            name: "Body Position",
            value: 1,
            title: "Sitting"
          },
          limb_coordination: {
            name: "Limb Co-ordination",
            value: 1,
            title: "Upper limb co-ordination"
          },
          strength: {
            name: "Strength",
            value: 1,
            title: "Limited"
          }
        },
        environment: {
          value: "L1",
          title: "Regulated inside climate"
        }
      },
      employment_requirements: {
        et_value: "3"
      },
      workplace_and_employers: "Hospitals"
    },
    {
      sub_noc: "1414.4",
      sub_noc_title: "Switchboard Operators",
      sub_noc_description:
        "Switchboard operators answer and forward telephone calls, take messages, schedule appointments and perform other clerical duties.",
      example_titles: ["switchboard operator"],
      profile_summary: {
        aptitudes: {
          aptitudes_g: 3,
          aptitudes_v: 3,
          aptitudes_n: 4,
          aptitudes_s: 4,
          aptitudes_p: 4,
          aptitudes_q: 3,
          aptitudes_k: 3,
          aptitudes_f: 3,
          aptitudes_m: 4
        },
        physical: {
          vision_value: 2,
          colour_value: 0,
          hearing_value: 2,
          body_position_value: 1,
          limb_coordination_value: 1,
          strength_value: 1
        },
        environment: "L1",
        interests: ["S", "M", "d"],
        dpt: {
          data_value: 5,
          people_value: 6,
          things_value: 4
        },
        et_value: "3"
      },
      descriptor_profile: {
        main_characteristics: [
          "<b>Social interest</b> in <b>speaking</b> to provide information",
          "<b>Clerical perception</b> to record messages",
          "<b>Directive interest</b> in <b>operating</b> telephone systems and switchboards to screen and forward telephone calls",
          "<b>Motor co-ordination</b> and <b>finger dexterity</b> to use telephone systems and switchboards; may operate computers",
          "<b>Methodical interest</b> in <b>copying</b> information to take messages; may keep records of calls placed and toll charges",
          "<b>General learning</b> and <b>verbal ability</b> to relay incoming, outgoing and inter-office calls"
        ]
      },
      physical_activities: {
        physical: {
          vision: {
            name: "Vision",
            value: 2,
            title: "Near vision"
          },
          colour: {
            name: "Colour Discrimination",
            value: 0,
            title: "Not relevant"
          },
          hearing: {
            name: "Hearing",
            value: 2,
            title: "Verbal interaction"
          },
          body_position: {
            name: "Body Position",
            value: 1,
            title: "Sitting"
          },
          limb_coordination: {
            name: "Limb Co-ordination",
            value: 1,
            title: "Upper limb co-ordination"
          },
          strength: {
            name: "Strength",
            value: 1,
            title: "Limited"
          }
        },
        environment: {
          value: "L1",
          title: "Regulated inside climate"
        }
      },
      employment_requirements: {
        et_value: "3"
      },
      workplace_and_employers:
        "Offices throughout the private and public sectors"
    },
    {
      sub_noc: "1414.5",
      sub_noc_title: "Answering Service Operators",
      sub_noc_description:
        "Answering service operators answer and forward telephone calls and take and relay messages.",
      example_titles: ["answering service operator", "telereceptionist"],
      profile_summary: {
        aptitudes: {
          aptitudes_g: 3,
          aptitudes_v: 3,
          aptitudes_n: 4,
          aptitudes_s: 4,
          aptitudes_p: 4,
          aptitudes_q: 3,
          aptitudes_k: 3,
          aptitudes_f: 3,
          aptitudes_m: 4
        },
        physical: {
          vision_value: 2,
          colour_value: 0,
          hearing_value: 2,
          body_position_value: 1,
          limb_coordination_value: 1,
          strength_value: 1
        },
        environment: "L1",
        interests: ["S", "M", "d"],
        dpt: {
          data_value: 5,
          people_value: 6,
          things_value: 4
        },
        et_value: "3"
      },
      descriptor_profile: {
        main_characteristics: [
          "<b>Clerical perception</b> to record, date stamp and file messages",
          "<b>General learning ability</b> to provide answering services for clients",
          "<b>Verbal ability</b> to greet callers and provide names and phone numbers of clients' offices and establishments",
          "<b>Social interest</b> in <b>speaking</b> to provide information, deliver messages and relay calls",
          "<b>Motor co-ordination</b> and <b>finger dexterity</b> to use telephone switchboards to place calls at clients' requests",
          "<b>Methodical interest</b> in <b>copying</b> information to record and relay messages",
          "<b>Directive interest</b> in <b>operating</b> telephone switchboards to locate clients in emergencies"
        ]
      },
      physical_activities: {
        physical: {
          vision: {
            name: "Vision",
            value: 2,
            title: "Near vision"
          },
          colour: {
            name: "Colour Discrimination",
            value: 0,
            title: "Not relevant"
          },
          hearing: {
            name: "Hearing",
            value: 2,
            title: "Verbal interaction"
          },
          body_position: {
            name: "Body Position",
            value: 1,
            title: "Sitting"
          },
          limb_coordination: {
            name: "Limb Co-ordination",
            value: 1,
            title: "Upper limb co-ordination"
          },
          strength: {
            name: "Strength",
            value: 1,
            title: "Limited"
          }
        },
        environment: {
          value: "L1",
          title: "Regulated inside climate"
        }
      },
      employment_requirements: {
        et_value: "3"
      },
      workplace_and_employers: "Medical and dental offices"
    },
    {
      sub_noc: "1414.3",
      sub_noc_title: "Medical and Dental Receptionists",
      sub_noc_description:
        "Medical and dental receptionists greet patients and direct them to appropriate services, answer and forward telephone calls, take messages, schedule appointments and perform other clerical duties.",
      example_titles: ["medical receptionist", "dental receptionist"],
      profile_summary: {
        aptitudes: {
          aptitudes_g: 3,
          aptitudes_v: 3,
          aptitudes_n: 4,
          aptitudes_s: 4,
          aptitudes_p: 4,
          aptitudes_q: 3,
          aptitudes_k: 3,
          aptitudes_f: 3,
          aptitudes_m: 4
        },
        physical: {
          vision_value: 2,
          colour_value: 0,
          hearing_value: 2,
          body_position_value: 1,
          limb_coordination_value: 1,
          strength_value: 1
        },
        environment: "L1",
        interests: ["S", "M", "d"],
        dpt: {
          data_value: 3,
          people_value: 6,
          things_value: 7
        },
        et_value: "3"
      },
      descriptor_profile: {
        main_characteristics: [
          "<b>Methodical interest</b> in <b>compiling</b> information to maintain billing systems",
          "<b>Social interest</b> in <b>speaking</b> to arrange appointments and announce patients' arrivals",
          "<b>Directive interest</b> in <b>handling</b> equipment such as telephones and computers; in removing and arranging patients' charts and records according to daily appointment schedules; and in directing patients to examination and treatment areas",
          "<b>General learning</b> and <b>verbal ability</b> to greet people coming into medical and dental offices and to determine their requirements",
          "<b>Clerical perception</b> to receive and record payment for services",
          "<b>Motor co-ordination</b> and <b>finger dexterity</b> to answer and forward telephone calls; and to operate computerized systems"
        ]
      },
      physical_activities: {
        physical: {
          vision: {
            name: "Vision",
            value: 2,
            title: "Near vision"
          },
          colour: {
            name: "Colour Discrimination",
            value: 0,
            title: "Not relevant"
          },
          hearing: {
            name: "Hearing",
            value: 2,
            title: "Verbal interaction"
          },
          body_position: {
            name: "Body Position",
            value: 1,
            title: "Sitting"
          },
          limb_coordination: {
            name: "Limb Co-ordination",
            value: 1,
            title: "Upper limb co-ordination"
          },
          strength: {
            name: "Strength",
            value: 1,
            title: "Limited"
          }
        },
        environment: {
          value: "L1",
          title: "Regulated inside climate"
        }
      },
      employment_requirements: {
        et_value: "3"
      },
      workplace_and_employers: "Medical and dental offices"
    },
    {
      sub_noc: "1414.5",
      sub_noc_title: "Answering Service Operators",
      sub_noc_description:
        "Answering service operators answer and forward telephone calls and take and relay messages.",
      example_titles: ["answering service operator", "telereceptionist"],
      profile_summary: {
        aptitudes: {
          aptitudes_g: 3,
          aptitudes_v: 3,
          aptitudes_n: 4,
          aptitudes_s: 4,
          aptitudes_p: 4,
          aptitudes_q: 3,
          aptitudes_k: 3,
          aptitudes_f: 3,
          aptitudes_m: 4
        },
        physical: {
          vision_value: 2,
          colour_value: 0,
          hearing_value: 2,
          body_position_value: 1,
          limb_coordination_value: 1,
          strength_value: 1
        },
        environment: "L1",
        interests: ["S", "M", "d"],
        dpt: {
          data_value: 5,
          people_value: 6,
          things_value: 4
        },
        et_value: "3"
      },
      descriptor_profile: {
        main_characteristics: [
          "<b>Clerical perception</b> to record, date stamp and file messages",
          "<b>General learning ability</b> to provide answering services for clients",
          "<b>Verbal ability</b> to greet callers and provide names and phone numbers of clients' offices and establishments",
          "<b>Social interest</b> in <b>speaking</b> to provide information, deliver messages and relay calls",
          "<b>Motor co-ordination</b> and <b>finger dexterity</b> to use telephone switchboards to place calls at clients' requests",
          "<b>Methodical interest</b> in <b>copying</b> information to record and relay messages",
          "<b>Directive interest</b> in <b>operating</b> telephone switchboards to locate clients in emergencies"
        ]
      },
      physical_activities: {
        physical: {
          vision: {
            name: "Vision",
            value: 2,
            title: "Near vision"
          },
          colour: {
            name: "Colour Discrimination",
            value: 0,
            title: "Not relevant"
          },
          hearing: {
            name: "Hearing",
            value: 2,
            title: "Verbal interaction"
          },
          body_position: {
            name: "Body Position",
            value: 1,
            title: "Sitting"
          },
          limb_coordination: {
            name: "Limb Co-ordination",
            value: 1,
            title: "Upper limb co-ordination"
          },
          strength: {
            name: "Strength",
            value: 1,
            title: "Limited"
          }
        },
        environment: {
          value: "L1",
          title: "Regulated inside climate"
        }
      },
      employment_requirements: {
        et_value: "3"
      },
      workplace_and_employers:
        "Offices throughout the private and public sectors"
    }
  ],
  clientArgs: {
    aptitudes: {},
    physical: {},
    environment: {
      ec_location: "L1"
    },
    interests: ["S", "M", "d"],
    dpt: {},
    et_value: "3",
    searchItem: "re"
  }
};

export default class FetchJobs2 extends React.Component {
  state = {
    loading: true,
    jobs: null,
    idx: 0,
    resultCount: null,
    queryResult: json
  };

  async componentDidMount() {
    const params = {
      aptitudesMin: this.props.fields.aptitudesMin.join(),
      aptitudesMax: this.props.fields.aptitudesMax.join(),
      physicalMin: this.props.fields.physicalActivitesMin.join(),
      physicalMax: this.props.fields.physicalActivitesMax.join(),
      environment: this.props.fields.environmentalConditionsMin.join(),
      interests: this.props.fields.interests,
      dptMin: this.props.fields.dptMin.join(),
      dptMax: this.props.fields.dptMax.join(),
      et_value: this.props.fields.employmentRequirementsMin
    };
    const response = await axios.get(
      "http://esdc-jobs-api.herokuapp.com/api/jobs",
      { params }
    );

    this.setState({
      loading: false,
      jobs: response.data.result,
      resultCount: response.data.result.length
    });
  }

  handleNext = () => {
    if (this.state.idx < this.state.resultCount - 1) {
      this.setState(
        {
          idx: this.state.idx + 1
        },
        () => {}
      );
    }
  };

  handleBack = () => {
    if (this.state.idx > 0) {
      this.setState(
        {
          idx: this.state.idx - 1
        },
        () => {}
      );
    }
  };

  render() {
    return <div>hello</div>;
  }

  // render() {
  //   return (
  //     <div style={{textAlign: 'center'}}>
  //       {this.state.loading || !this.state.jobs ? (
  //         <div>loading...</div>
  //       ) : (
  //         <div style={{ backgroundColor: "#D8F3FF" , textAlign: "left", marginLeft: 200, marginRight: 200}}>
  //           <label>Occupation: </label>
  //           <div style={{ display: "inline-block", textAlign: "left" }}>
  //             {this.state.jobs[this.state.idx].sub_noc_title} ({this.state.jobs[this.state.idx].sub_noc})
  //           </div>
  //           <br />
  //           <label>Description: </label>
  //           <div style={{ display: "inline-block", textAlign: "left" }}>
  //             {this.state.jobs[this.state.idx].sub_noc_description}
  //           </div>
  //           <br />
  //           <label>Example Titles: </label>
  //           <div style={{ textAlign: "left" }}>
  //             {this.state.jobs[this.state.idx].example_titles.map(title => {
  //               return <div>-{title}</div>;
  //             })}
  //           </div>
  //         </div>
  //       )}
  //       <div>
  //         {"Occupation results: " +
  //           (this.state.idx + 1) +
  //           "/" +
  //           this.state.resultCount}
  //       </div>
  //       <button onClick={this.handleBack}>back</button>
  //       <button onClick={this.handleNext}>next</button>
  //     </div>
  //   );
  // }
}
