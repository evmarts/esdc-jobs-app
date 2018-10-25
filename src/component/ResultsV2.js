import React from "react";
import NocResult from "./NocResult";

export default class ResultsV2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  result = [
    {
      noc: "7512.3",
      noc_title: "Subway Train and Light Rail Transit Operators",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "7512.3",
          sub_noc_title: "Subway Train and Light Rail Transit Operators",
          sub_noc_description:
            "Subway train and light rail transit operators transport passengers on established routes.",
          example_titles: [
            "light rail transit operator",
            "subway train operator",
            "public passenger transit driver",
            "transit operator - transportation"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 4,
              colour_value: 1,
              hearing_value: 1,
              body_position_value: 1,
              limb_coordination_value: 1,
              strength_value: 1
            },
            interests: ["O", "M", "s"],
            dpt: {
              data_value: 5,
              people_value: 6,
              things_value: 3
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to understand and apply knowledge and skills needed to operate subway trains and light rail transit vehicles",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to operate controls that open and close vehicle doors",
              "<b>Objective interest</b> in <b>driving – operating</b> subway and rail transit vehicles as part of two-person crews",
              "<b>Methodical interest</b> in <b>copying</b> information to report delays, malfunctions and accidents; and in observing signals at crossings and arrival and departure points",
              "<b>Social interest</b> in <b>speaking</b> with control units when reporting delays, malfunctions and accidents; and in directing passengers during emergency evacuation procedures"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 4,
                title: "Total visual field"
              },
              colour: {
                name: "Colour Discrimination",
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
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
            }
          }
        }
      ]
    },
    {
      noc: "6564.3",
      noc_title: "Other Service Providers",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "6564.3",
          sub_noc_title: "Other Service Providers",
          sub_noc_description:
            "Other service providers included in this group offer a variety of personal services not elsewhere classified.",
          example_titles: ["chat line agent", "dating service consultant"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 1,
              limb_coordination_value: 0,
              strength_value: 1
            },
            interests: ["S", "M", "D"],
            dpt: {
              data_value: 3,
              people_value: 7,
              things_value: 8
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to acquire and apply knowledge of techniques required to provide a variety of personal services",
              "<b>Verbal ability</b> to communicate with clients",
              "<b>Social interest</b> in <b>serving – assisting</b> clients of dating and other personal services establishments",
              "<b>Methodical interest</b> in <b>compiling</b> information to provide services that are best suited to the clients' personal needs",
              "<b>Directive interest</b> in arranging client matches; and in providing advice related to a wide variety of personal services"
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
                value: 0,
                title: "Not relevant"
              },
              strength: {
                name: "Strength",
                value: 1,
                title: "Limited"
              }
            }
          }
        }
      ]
    },
    {
      noc: "6561.3",
      noc_title: "Colour Consultants",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "6561.3",
          sub_noc_title: "Colour Consultants",
          sub_noc_description:
            "Colour consultants advise clients on their personal appearance to improve their personal and business image.",
          example_titles: [
            "fashion colour consultant",
            "fashion and wardrobe consultant",
            "wardrobe consultant"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 2,
              colour_value: 1,
              hearing_value: 2,
              body_position_value: 1,
              limb_coordination_value: 0,
              strength_value: 1
            },
            interests: ["S", "M", "d"],
            dpt: {
              data_value: 3,
              people_value: 7,
              things_value: 8
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to understand and use techniques related to the selection of colours most becoming to clients' natural body tones",
              "<b>Verbal ability</b> to arrange appointments, meet clients and explain services and fees",
              "<b>Social interest</b> in <b>assisting</b> clients to choose colours for clothing that will complement their appearance; may advise clients on the selection and purchase of clothing, accessories, make-up and other fashion-related items",
              "<b>Methodical interest</b> in <b>compiling</b> information to pick colours that are best suited to the clients' skin tone, hair colour and lip and eye colours",
              "<b>Directive interest</b> in recommending personal colour charts for clients' use in purchasing clothing, accessories and make-up that will complement their appearance"
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
                value: 1,
                title: "Relevant"
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
                value: 0,
                title: "Not relevant"
              },
              strength: {
                name: "Strength",
                value: 1,
                title: "Limited"
              }
            }
          }
        }
      ]
    },
    {
      noc: "9537.2",
      noc_title: "Other Inspectors",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "9537.2",
          sub_noc_title: "Other Inspectors",
          sub_noc_description:
            "Workers in this group inspect assembled products such as jewellery, silverware, buttons, pencils, non-prescription lenses, brushes, clocks and watches, musical instruments, sporting good and toys.",
          example_titles: [
            "camera assembly inspector",
            "jewellery inspector",
            "piano assembly inspector",
            "toy inspector"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 3,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 1,
              hearing_value: 1,
              body_position_value: 2,
              limb_coordination_value: 0,
              strength_value: 1
            },
            interests: ["M", "O", "d"],
            dpt: {
              data_value: 5,
              people_value: 8,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to check manufactured items for defects to ensure that they conform to specifications",
              "<b>Motor co-ordination</b> and <b>finger</b> and <b>manual dexterity</b> to affix seals and tags to approved items",
              "<b>Methodical interest</b> in <b>copying</b> information to complete reports on inspected products",
              "<b>Objective interest</b> in <b>handling</b> to inspect manufactured items visually; and in using sample models and instruments for inspection purposes",
              "<b>Directive interest</b> in returning defective products for repair or recycle"
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
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 0,
                title: "Not relevant"
              },
              strength: {
                name: "Strength",
                value: 1,
                title: "Limited"
              }
            }
          }
        }
      ]
    },
    {
      noc: "6511",
      noc_title: "Maîtres d'hôtel and Hosts/Hostesses",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "6511",
          sub_noc_title: "Maîtres d'hôtel and Hosts/Hostesses",
          sub_noc_description:
            "Maîtres d'hôtel and hosts/hostesses greet patrons and escort them to tables, and supervise and co-ordinate the activities of food and beverage servers.",
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 2,
              limb_coordination_value: 0,
              strength_value: 1
            },
            interests: ["M", "S", "d"],
            dpt: {
              data_value: 1,
              people_value: 3,
              things_value: 8
            }
          },
          descriptor_profile: {},
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
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
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 0,
                title: "Not relevant"
              },
              strength: {
                name: "Strength",
                value: 1,
                title: "Limited"
              }
            }
          }
        }
      ]
    },
    {
      noc: "6513",
      noc_title: "Food and Beverage Servers",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "6513",
          sub_noc_title: "Food and Beverage Servers",
          sub_noc_description:
            "Food and beverage servers take patrons' food and beverage orders and serve orders to patrons.",
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 2,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["M", "S", "o"],
            dpt: {
              data_value: 5,
              people_value: 7,
              things_value: 7
            }
          },
          descriptor_profile: {},
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
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
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: 3414,
      noc_title: "Other Assisting Occupations in Support of Health Services",
      sub_nocs: [
        {
          noc: 3414,
          sub_noc: "3414.5",
          sub_noc_title: "Central Supply Aides",
          sub_noc_description:
            "Central supply aides perform a variety of support functions to assist health care professionals and other health care staff.",
          example_titles: ["central supply aide"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 2,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 5,
              people_value: 7,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to understand instructions to assist with central supply support functions",
              "<b>Objective interest</b> in <b>operating</b> machines such as instrument washers, sonic sinks, cart washers and steam autoclaves to clean, reprocess and sterilize supplies for reuse",
              "<b>Methodical interest</b> in <b>copying</b> information to assemble packs of sterile supplies and instruments for delivery to hospital departments",
              "<b>Innovative interest</b> in <b>assisting</b> health care staff by collecting and sorting soiled supplies and instruments from hospital departments, and by delivering sterile supplies to departments as required"
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        },
        {
          noc: 3414,
          sub_noc: "3414.3",
          sub_noc_title:
            "Optical/Ophthalmic Laboratory Technicians and Assistants",
          sub_noc_description:
            "Optical and ophthalmic laboratory technicians and assistants assemble eyeglasses according to prescriptions written by ophthalmologists and optometrists.",
          example_titles: [
            "ophthalmic lens grinder",
            "ophthalmic laboratory technician – retail",
            "optical laboratory assistant",
            "optometrist assistant"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 3,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 3,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 5,
              people_value: 7,
              things_value: 1
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to assemble eyeglasses according to prescriptions received",
              "<b>Manual</b> and <b>finger dexterity</b> to grind, cut polish and edge lenses for eyeglasses; and to make minor repairs for customers such as replacing frame screws and straightening frames",
              "<b>Objective interest</b> in <b>precision working</b> to operate laboratory equipment; and in maintaining and repairing optical laboratory equipment or machinery",
              "<b>Methodical interest</b> in <b>copying</b> established procedures to assemble eyeglasses according to precise specifications; and in fitting lenses into frames",
              "<b>Innovative interest</b> in <b>assisting</b> clients by suggesting improvements and recommending minor repairs to eyeglasses"
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
                value: 3,
                title: "Sitting, standing, walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        },
        {
          noc: 3414,
          sub_noc: "3414.7",
          sub_noc_title: "Morgue Attendants",
          sub_noc_description:
            "Morgue attendants provide support services and assistance to pathologists.",
          example_titles: [
            "autopsy assistant",
            "clinical laboratory helper",
            "morgue attendant"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 3,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 3,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["M", "I", "O"],
            dpt: {
              data_value: 5,
              people_value: 7,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to help pathologists at autopsies by preparing bodies in morgues and laying out surgical instruments, laboratory supplies, fixatives and other articles",
              "<b>Methodical interest</b> in <b>assisting</b> pathologists by preparing examination rooms, transferring bodies from morgues to examining tables, and cleaning and sewing up bodies for release to funeral homes",
              "<b>Innovative interest</b> in <b>copying</b> procedures for removing organs and tissue specimens as instructed by pathologists; and in preparing solutions for preservation of specimens",
              "<b>Objective interest</b> in <b>manipulating</b> surgical instruments and equipment to make incisions and remove organs and tissue specimens, as instructed by attending pathologist; and in placing specimens in preservative solutions"
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 3,
                title: "Sitting, standing, walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        },
        {
          noc: 3414,
          sub_noc: "3414.1",
          sub_noc_title: "Orthopedic Technologists",
          sub_noc_description:
            "Orthopedic technologists assist orthopedic surgeons in the treatment of orthopedic diseases and injuries.",
          example_titles: ["cast room technician", "orthopedic technologist"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["M", "O", "I"],
            dpt: {
              data_value: 5,
              people_value: 7,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning</b> and <b>verbal ability</b> to assist orthopedic surgeons in the treatment of orthopedic diseases and injuries and to instruct patients and their families and other health care professionals with respect to orthopedic matters",
              "<b>Methodical interest</b> in <b>copying</b> established procedures for cleaning and dressing wounds",
              "<b>Objective interest</b> in <b>operating</b> equipment to construct splints and trim and remove casts; and in applying and adjusting casts, splints, bandages and other orthopedic devices, and in removing sutures and pins",
              "<b>Innovative interest</b> in <b>assisting</b> in the application, maintenance and adjustment of traction equipment; and in repairing orthopedic equipment"
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
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: 9411,
      noc_title: "Machine Operators, Mineral and Metal Processing",
      sub_nocs: [
        {
          noc: 9411,
          sub_noc: "9411",
          sub_noc_title: "Machine Operators, Mineral and Metal Processing",
          sub_noc_description:
            "Machine operators, mineral and metal processing operate machinery to process mineral ore and metal.",
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 2,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 5,
              people_value: 8,
              things_value: 4
            }
          },
          descriptor_profile: {},
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: 6621,
      noc_title: "Service Station Attendants",
      sub_nocs: [
        {
          noc: 6621,
          sub_noc: "6621.1",
          sub_noc_title: "Automotive Service Station Attendants",
          sub_noc_description:
            "Automotive service station attendants sell fuel and other automotive products, and perform such services as fuelling, cleaning, lubricating and performing minor repairs to motor vehicles.",
          example_titles: [
            "gas station attendant (except self-serve)",
            "service station attendant"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 2,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["M", "O", "s"],
            dpt: {
              data_value: 6,
              people_value: 7,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to understand and apply simple motor-vehicle servicing instructions",
              "<b>Numerical ability</b> to receive payment from customers",
              "<b>Manual dexterity</b> to perform minor automotive service and maintenance",
              "<b>Methodical interest</b> in <b>comparing</b> information to check oil levels, tire pressures and fluid levels",
              "<b>Objective interest</b> in <b>operating – manipulating</b> to refuel vehicles and replace parts such as tires, light bulbs, and windshield wiper blades; and in performing minor property maintenance duties such as sweeping service station lot, trimming shrubs, scrubbing service bays and painting curbs",
              "<b>Social interest</b> in <b>serving</b> customers by performing minor repairs and maintenance work on motor vehicles, operating car wash facility and by selling fuel and other automotive products; may pick up and deliver customers' cars for service station automotive repair department"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
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
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        },
        {
          noc: 6621,
          sub_noc: "6621.2",
          sub_noc_title: "Marina Service Station Attendants",
          sub_noc_description:
            "Marina service station attendants sell fuel, rent boats and related equipment, and maintain marina facilities.",
          example_titles: ["marina attendant", "service station attendant"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["M", "O", "s"],
            dpt: {
              data_value: 6,
              people_value: 7,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to understand and apply simple boat-servicing instructions",
              "<b>Numerical ability</b> to receive payments from customers",
              "<b>Manual dexterity</b> to maintain dock areas and marina facilities, and to assist in seasonal moving of ramps and docks",
              "<b>Methodical interest</b> in <b>comparing</b> information to check oil levels and to record rental data",
              "<b>Objective interest</b> in <b>operating – manipulating</b> to refuel boats and pump marine septic systems",
              "<b>Social interest</b> in <b>serving</b> customers by performing routine maintenance work on boats and by renting boats, life jackets and other equipment"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
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
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: 3233,
      noc_title: "Licensed Practical Nurses",
      sub_nocs: [
        {
          noc: 3233,
          sub_noc: "3233.2",
          sub_noc_title: "Operating Room Technicians",
          sub_noc_description:
            "Operating room technicians prepare patients and provide assistance to medical practitioners prior to and during surgery.",
          example_titles: ["operating room technician"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 3,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 2,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["M", "O", "s"],
            dpt: {
              data_value: 5,
              people_value: 7,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to prepare patients and operating rooms for surgery, and to assist surgical team during surgery",
              "<b>Methodical interest</b> in <b>copying</b> information to prepare patients for surgery by washing, shaving and sterilizing operative areas, and to clean and sterilize operating rooms and instruments",
              "<b>Objective interest</b> in <b>handling</b> medical equipment by laying out instruments, setting up equipment and passing instruments to surgeons",
              "<b>Social interest</b> in <b>assisting</b> surgeons and surgical teams with gowns, gloves and instruments during operations"
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
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: 9413,
      noc_title:
        "Glass Forming and Finishing Machine Operators and Glass Cutters",
      sub_nocs: [
        {
          noc: 9413,
          sub_noc: "9413.2",
          sub_noc_title: "Glass Forming Machine Operators",
          sub_noc_description:
            "Glass forming machine operators run single-function machines to melt and form glassware and glass products.",
          example_titles: [
            "glass-blowing machine operator",
            "glass moulder",
            "glass-pressing machine operator"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 2,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 3,
              people_value: 8,
              things_value: 2
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to set up automatic glass feeding, flowing and forming machines",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to spray and swab moulds with oil solutions to prevent adhesion of glass and to use measuring instruments",
              "<b>Objective interest</b> in <b>controlling</b> and maintaining machines that press and blow molten glass into moulds to form containers such as bottles, jars and drinking glasses; and in operating electric kilns that heat glass sheets and mould to the shape and curve of metal jigs",
              "<b>Methodical interest</b> in <b>compiling</b> information to weigh, measure and check production samples using scales and gauges and by visual verification to ensure that samples conform to specifications",
              "<b>Innovative interest</b> in adjusting automatic glass feeding, flowing and forming machines to meet production specifications"
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        },
        {
          noc: 9413,
          sub_noc: "9413.1",
          sub_noc_title: "Glass Process Control Operators",
          sub_noc_description:
            "Glass process control operators run multi-functional process control machinery to melt, form and cut float glass and glass products.",
          example_titles: ["float operator – glass forming", "mirror maker"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 3,
              limb_coordination_value: 1,
              strength_value: 1
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 3,
              people_value: 8,
              things_value: 2
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to operate multi-functional process control machinery through control panels, computer terminals and other control systems to mix and melt raw materials",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to adjust controls in order to coat glass with silver and other metals and materials",
              "<b>Objective interest</b> in <b>controlling</b> machines that heat, anneal, temper and form float glass and glass products; may operate process control machinery to cut glass and assemble glass window units; may clean and maintain process machinery; may ensure adequate levels of oil, soap, talc or other materials used in machine production of glass",
              "<b>Methodical interest</b> in <b>compiling</b> information to maintain shift logs of production and other data",
              "<b>Innovative interest</b> in observing gauges, computer printouts and video monitors to verify specified processing conditions, and to make adjustments as necessary"
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 3,
                title: "Sitting, standing, walking"
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
            }
          }
        },
        {
          noc: 9413,
          sub_noc: "9413.4",
          sub_noc_title: "Glass Cutters",
          sub_noc_description:
            "Glass cutters cut flat glass of various thicknesses to specified sizes and shapes by hand.",
          example_titles: ["hand glass cutter", "glass edger"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 5,
              people_value: 8,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to cut glass of various thicknesses to specified sizes and shapes by hand",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to smooth rough edges using belt sanders and smoothing wheels",
              "<b>Objective interest</b> in <b>operating</b> equipment and using hand tools to cut glass along marked outlines and around patterns; and in setting up, operating and adjusting computerized and robotic glass cutting equipment",
              "<b>Methodical interest</b> in <b>copying</b> to jig, measure and mark glass, and to place patterns on or under glass for cutting; and in monitoring processes for product quality",
              "<b>Innovative interest</b> in examining and marking defective glass to obtain best cuts"
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: "9418",
      noc_title: "Other Metal Products Machine Operators",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "9418",
          sub_noc_title: "Other Metal Products Machine Operators",
          sub_noc_description:
            "This group includes metal products machine operators, not elsewhere classified, who operate one or more automatic or multi-purpose machines to produce a variety of metal parts and products, such as wire mesh, nails, bolts and chains.",
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 2,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["M", "O", "d"],
            dpt: {
              data_value: 6,
              people_value: 8,
              things_value: 4
            }
          },
          descriptor_profile: {},
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: 9421,
      noc_title: "Chemical Plant Machine Operators",
      sub_nocs: [
        {
          noc: 9421,
          sub_noc: "9421",
          sub_noc_title: "Chemical Plant Machine Operators",
          sub_noc_description:
            "Chemical plant machine operators monitor and operate units and machinery to blend, mix, process and package a wide range of specialty chemicals, pharmaceuticals, cleaning and toiletry products.",
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 1,
              hearing_value: 1,
              body_position_value: 2,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 5,
              people_value: 8,
              things_value: 4
            }
          },
          descriptor_profile: {},
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 2,
                title: "Near vision"
              },
              colour: {
                name: "Colour Discrimination",
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: 9423,
      noc_title: "Rubber Processing Machine Operators and Related Workers",
      sub_nocs: [
        {
          noc: 9423,
          sub_noc: "9423.1",
          sub_noc_title: "Rubber Processing Machine Operators",
          sub_noc_description:
            "Rubber processing machine operators operate processing machines used in the manufacture of rubber products.",
          example_titles: [
            "banbury operator – rubber products manufacturing",
            "calender machine operator – rubber products manufacturing",
            "cure operator – rubber products manufacturing",
            "extruder operator – rubber products manufacturing",
            "rubber processing machine operator",
            "scrap rubber grinder - recycling"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 2,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["O", "m", "i"],
            dpt: {
              data_value: 6,
              people_value: 8,
              things_value: 5
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to set up and operate rubber processing machinery",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to adjust machines to proper settings, and to load and feed rubber, pigments, filler, oil and chemicals into machines",
              "<b>Objective interest</b> in <b>tending</b> machinery used for mixing, calendering, extruding, moulding and curing rubber materials and rubber products",
              "<b>Methodical interest</b> in <b>comparing</b> to check and monitor processing conditions and product quality",
              "<b>Innovative interest</b> in making adjustments to machines and in training and helping train new workers"
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        },
        {
          noc: 9423,
          sub_noc: "9423.2",
          sub_noc_title: "Assemblers, Rubber Products",
          sub_noc_description:
            "Assemblers in this group put together rubber products.",
          example_titles: [
            "rubber belt builder",
            "rubber hose builder",
            "rubber products assembler",
            "tire builder"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 4
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 6,
              people_value: 8,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to operate machines and equipment to assemble rubber products",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to use hand tools to cut, shape, splice, fit and cement rubber materials to form rubber parts and products",
              "<b>Objective interest</b> in <b>operating</b> finishing machines and equipment to trim, grind and buff rubber parts and products into final form",
              "<b>Methodical interest</b> in <b>comparing</b> information to lay out and prepare rubber materials for assembly",
              "<b>Innovative interest</b> in training and helping train new workers"
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 4,
                title: "Heavy"
              }
            }
          }
        },
        {
          noc: 9423,
          sub_noc: "9423.3",
          sub_noc_title: "Rubber Products Inspectors",
          sub_noc_description:
            "Rubber products inspectors examine products to ensure that they conform to specifications and quality standards.",
          example_titles: [
            "rubber products manufacturing inspector",
            "tire inspector"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["O", "M", "D"],
            dpt: {
              data_value: 5,
              people_value: 8,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to inspect rubber products for defects and to ensure that they conform to specifications and quality standards",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to affix seals and tags to approved products",
              "<b>Objective interest</b> in <b>handling</b> to examine products visually; and in using instruments to check that products conform to specifications; may make minor adjustments and repairs to products",
              "<b>Methodical interest</b> in <b>copying</b> to fill out product inspection reports; and in marking defective products",
              "<b>Directive interest</b> in rerouting defective products for repair or recycle"
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: 9432,
      noc_title: "Pulp Mill Machine Operators",
      sub_nocs: [
        {
          noc: 9432,
          sub_noc: "9432",
          sub_noc_title: "Pulp Mill Machine Operators",
          sub_noc_description:
            "Pulp mill machine operators operate and monitor various types of processing machinery and equipment to produce pulp.",
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 2,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 5,
              people_value: 6,
              things_value: 4
            }
          },
          descriptor_profile: {},
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: 6623,
      noc_title: "Other Elemental Sales Occupations",
      sub_nocs: [
        {
          noc: 6623,
          sub_noc: "6623.3",
          sub_noc_title: "Street Vendors",
          sub_noc_description:
            "Street vendors sell goods and services by street vending from street-corner carts or kiosks, at arenas, shopping malls and stadiums.",
          example_titles: ["street vendor"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 2,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["M", "S", "d"],
            dpt: {
              data_value: 6,
              people_value: 5,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to acquire and apply knowledge of selling techniques, and to become familiar with products",
              "<b>Verbal ability</b> to communicate with customers when describing products",
              "<b>Numerical ability</b> to receive payments and make change",
              "<b>Methodical interest</b> in <b>comparing</b> information to explain products' desirable qualities, and set up and display merchandise on sidewalks and at public events",
              "<b>Social interest</b> in <b>persuading</b> customers by selling products",
              "<b>Directive interest</b> in <b>handling</b> products by loading goods into baskets, pushcarts and trucks, and by handing goods to customers"
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
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        },
        {
          noc: 6623,
          sub_noc: "6623.5",
          sub_noc_title: "Demonstrators",
          sub_noc_description:
            "Demonstrators sell goods and services during home demonstrations and retail exhibitions.",
          example_titles: [
            "demonstrator – retail",
            "home demonstrator – retail"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 3,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["M", "S", "o"],
            dpt: {
              data_value: 5,
              people_value: 5,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to acquire and apply knowledge of selling techniques, and to become familiar with goods and services being offered",
              "<b>Verbal ability</b> to communicate with prospective customers when describing goods and services",
              "<b>Methodical interest</b> in <b>copying</b> information to demonstrate and explain products' features",
              "<b>Social interest</b> in <b>persuading</b> customers by organizing demonstration parties in private homes and describing qualities and merits of products",
              "<b>Objective interest</b> in <b>handling</b> products to arrange displays in wholesale, retail and industrial establishments, at exhibitions and trade shows, and in homes"
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
                value: 3,
                title: "Sitting, standing, walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        },
        {
          noc: 6623,
          sub_noc: "6623.1",
          sub_noc_title: "Direct Distributors",
          sub_noc_description:
            "Direct distributors contact potential customers by phone or through personal contacts, and demonstrate and sell products directly to individual customers or at sales parties.",
          example_titles: ["canvasser – retail", "direct distributor – retail"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 3,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["M", "S", "d"],
            dpt: {
              data_value: 5,
              people_value: 5,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to acquire and apply knowledge of selling techniques, and to become familiar with products",
              "<b>Verbal ability</b> to communicate with customers when describing products",
              "<b>Methodical interest</b> in <b>copying</b> information to present sample products and catalogues, and to explain desirable qualities of products",
              "<b>Social interest</b> in <b>persuading</b> customers by soliciting sales of goods and services directly to individuals or at sales parties",
              "<b>Directive interest</b> in <b>handling</b> merchandise to canvass prospective customers; may develop lists of prospective customers or follow leads supplied by management, and may distribute advertising literature and provide samples"
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
                value: 3,
                title: "Sitting, standing, walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        },
        {
          noc: 6623,
          sub_noc: "6623.2",
          sub_noc_title: "Door-to-Door Salespersons",
          sub_noc_description:
            "Door-to-door salespersons solicit sales and sell merchandise to residents of private homes.",
          example_titles: ["door-to-door salesperson"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 3,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["M", "S", "d"],
            dpt: {
              data_value: 5,
              people_value: 5,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to acquire and apply knowledge of selling techniques, and to become familiar with products",
              "<b>Verbal ability</b> to communicate with customers when describing products",
              "<b>Methodical interest</b> in <b>copying</b> information to present sample products and catalogues, and to explain desirable qualities of products",
              "<b>Social interest</b> in <b>persuading</b> customers by soliciting sales of goods and services in private homes",
              "<b>Directive interest</b> in <b>handling</b> merchandise to canvass prospective customers; may develop lists of prospective customers or follow leads supplied by management, and may distribute advertising literature and provide samples"
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
                value: 3,
                title: "Sitting, standing, walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: 9441,
      noc_title: "Textile Fibre and Yarn Preparation Machine Operators",
      sub_nocs: [
        {
          noc: 9441,
          sub_noc: "9441.2",
          sub_noc_title: "Textile Dyeing and Finishing Machine Operators",
          sub_noc_description:
            "Textile dyeing and finishing machine operators bleach, dye and finish yarn, thread, cloth and textile products.",
          example_titles: [
            "autoclave tender - textile manufacturing",
            "bleaching range operator - textile manufacturing",
            "coater operator - textile manufacturing",
            "dyeing range operator - textile manufacturing",
            "fabric-printing machine operator",
            "finishing range operator - textile manufacturing"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 1,
              hearing_value: 1,
              body_position_value: 2,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 6,
              people_value: 6,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> and <b>manual dexterity</b> to set up machines for proper processing",
              "<b>Objective interest</b> in <b>operating</b> machines to bleach, dye, coat and finish fabric, thread, yarn and other textile products, and machinery to print designs onto textile products",
              "<b>Methodical interest</b> in <b>comparing</b> to examine products for defects and to ensure that products adhere to quality standards; and in mixing dyes and chemicals according to established formulas",
              "<b>Innovative interest</b> in <b>speaking</b> to notify supervisors and mechanics of equipment malfunctions"
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
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: "9445.1",
      noc_title: "Fabric Cutters",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "9445.1",
          sub_noc_title: "Fabric Cutters",
          sub_noc_description:
            "Fabric cutters cut fabric to make parts for garments, linens and other articles.",
          example_titles: ["fabric cutter", "clothing cutter", "sample cutter"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 2,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["M", "O", "i"],
            dpt: {
              data_value: 5,
              people_value: 8,
              things_value: 1
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to cut fabrics to make parts for garments, linens and other articles",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to place patterns on top of layers of fabric, and to cut fabrics using electric and manual knives and cutters",
              "<b>Methodical interest</b> in <b>copying</b> information to cut fabrics while following patterns",
              "<b>Objective interest</b> in <b>precision working</b> to use computer numerically controlled (CNC) cutting devices to cut layers of fabric; may cut fabric samples",
              "<b>Innovative interest</b> in adjusting guides, cutting blades and other mechanisms for specific operations, and in adapting cutting techniques to type of fabric and style of garment"
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: "9445.2",
      noc_title: "Fur Cutters",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "9445.2",
          sub_noc_title: "Fur Cutters",
          sub_noc_description:
            "Fur cutters cut fur pelts to make parts for garments and other fur articles.",
          example_titles: ["fur cutter", "sample cutter"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 2,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["M", "O", "i"],
            dpt: {
              data_value: 5,
              people_value: 8,
              things_value: 1
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to cut fur pelts to make parts for garments and other fur articles",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to use furriers' knives and cutters",
              "<b>Methodical interest</b> in <b>copying</b> to cut fur skins in diagonal strips to specified lengths and shapes of pelts; may sort and match skins",
              "<b>Objective interest</b> in <b>precision working</b> with cutting devices to cut fur skins; may prepare fur samples",
              "<b>Innovative interest</b> in numbering pelts to indicate their location on patterns"
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: "9445.3",
      noc_title: "Leather Cutters",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "9445.3",
          sub_noc_title: "Leather Cutters",
          sub_noc_description:
            "Leather cutters cut leather to make parts for shoes, garments and other leather articles.",
          example_titles: [
            "glove cutter",
            "leather cutter",
            "shoe cutter",
            "sample cutter"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 2,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 5,
              people_value: 8,
              things_value: 1
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to cut leather to make parts for shoes, garments and other articles",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to use cutting machines and equipment, and to operate clickers and punch presses to stretch leather",
              "<b>Objective interest</b> in <b>precision working</b> with machines and by hand to make leather products; may cut leather samples",
              "<b>Methodical interest</b> in <b>copying</b> to select leather and cutting dies for goods and shoe parts according to specifications",
              "<b>Innovative interest</b> in positioning leather on cutting beds of machines, and in maximizing usage according to skins' grains, flaws and stretch"
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: "6711.1",
      noc_title: "Food Service Counter Attendants and Food Preparers",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "6711.1",
          sub_noc_title: "Food Service Counter Attendants and Food Preparers",
          sub_noc_description:
            "Foodservice counter attendants and food preparers prepare, heat and cook simple food items and serve customers at food counters.",
          example_titles: [
            "fast-food preparer",
            "food counter attendant",
            "food preparer",
            "ice cream counter attendant",
            "salad bar attendant",
            "sandwich maker",
            "cafeteria counter attendant"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 2,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["M", "s", "o"],
            dpt: {
              data_value: 6,
              people_value: 7,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to acquire knowledge of menu items and food preparation techniques, and to take customers' orders",
              "<b>Numerical ability</b> to do simple arithmetic; may receive payment for food items purchased",
              "<b>Motor co-ordination</b> and <b>finger dexterity</b> to clean, peel, slice and trim foodstuffs using manual and electric appliances",
              "<b>Methodical interest</b> in <b>comparing</b> information to prepare food according to set standards; in stocking refrigerators and salad bars; in keeping records of the quantities of food used; and in taking customers' orders",
              "<b>Social interest</b> in <b>serving</b> food to customers at counters and buffet tables",
              "<b>Objective interest</b> in <b>handling</b> the preparation of food such as sandwiches, hamburgers, salads, milkshakes and ice cream dishes; to portion and wrap food or place it directly on plates for service to patrons, and package take-out food"
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
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: "9535.2",
      noc_title: "Plastics Products Inspectors",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "9535.2",
          sub_noc_title: "Plastics Products Inspectors",
          sub_noc_description:
            "Plastics products inspectors inspect plastic parts and finished products.",
          example_titles: [
            "plastic products inspector and tester",
            "plastics inspector"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 2,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["M", "O", "i"],
            dpt: {
              data_value: 5,
              people_value: 8,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to inspect plastic products for defects and to ensure that they conform to specifications and quality standards",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to affix seals and tags to approved products",
              "<b>Methodical interest</b> in <b>copying</b> information to mark defective products and prepare reports on inspected products",
              "<b>Objective interest</b> in <b>handling</b> products for inspection; and in using instruments to inspect plastic products",
              "<b>Innovative interest</b> in making minor adjustments and repairs to products, and in rerouting defective products for repair or recycle"
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 2,
                title: "Standing and/or walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: "6742.5",
      noc_title: "Parking Lot Attendants and Car Jockeys",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "6742.5",
          sub_noc_title: "Parking Lot Attendants and Car Jockeys",
          sub_noc_description:
            "Parking lot attendants and car jockeys provide services in parking lots.",
          example_titles: [
            "car jockey",
            "hotel valet",
            "parking lot attendant",
            "toll booth attendant"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 4,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 3,
              limb_coordination_value: 2,
              strength_value: 1
            },
            interests: ["M", "O", "s"],
            dpt: {
              data_value: 6,
              people_value: 6,
              things_value: 3
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to understand and follow standard procedures",
              "<b>Methodical interest</b> in <b>comparing</b> to issue ticket stubs and collect parking fees",
              "<b>Objective interest</b> in <b>driving</b> to park cars",
              "<b>Social interest</b> in <b>speaking</b> to customers when directing them to parking spaces"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 4,
                title: "Total visual field"
              },
              colour: {
                name: "Colour Discrimination",
                value: 0,
                title: "Not relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 3,
                title: "Sitting, standing, walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 2,
                title: "Multiple limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 1,
                title: "Limited"
              }
            }
          }
        }
      ]
    },
    {
      noc: 3232,
      noc_title: "Midwives and Practitioners of Natural Healing",
      sub_nocs: [
        {
          noc: 3232,
          sub_noc: "3232.3",
          sub_noc_title: "Herbalists",
          sub_noc_description:
            "Herbalists are practitioners of natural healing who provide an alternative form of health care to patients.",
          example_titles: ["herbalist"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 3,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["S", "I", "D"],
            dpt: {
              data_value: 2,
              people_value: 2,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to advise patients on the use of herbs to treat conditions such as arthritis, rheumatism, asthma, skin disorders and stomach ailments",
              "<b>Social interest</b> in <b>analyzing</b> information provided by patients concerning health problems and disorders",
              "<b>Innovative interest</b> in <b>handling</b> varieties of herbs used as sources of healing; may sell these herbs",
              "<b>Directive interest</b> in <b>instructing</b> patients on the proper use of herbs to treat disorders"
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
                value: 3,
                title: "Sitting, standing, walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        },
        {
          noc: 3232,
          sub_noc: "3232.4",
          sub_noc_title: "Homeopaths",
          sub_noc_description:
            "Homeopaths are practitioners of natural healing who provide an alternative form of health care to patients.",
          example_titles: ["homeopathist"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 1,
              hearing_value: 2,
              body_position_value: 3,
              limb_coordination_value: 1,
              strength_value: 1
            },
            interests: ["S", "I", "D"],
            dpt: {
              data_value: 2,
              people_value: 0,
              things_value: 1
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to diagnose and treat patients' illnesses by administering, in chemical or herbal form, a small dosage of the illness itself or by suggesting lifestyle changes",
              "<b>Social interest</b> in <b>analyzing</b> information provided by patients concerning illnesses and health problems",
              "<b>Innovative interest</b> in <b>precision working</b> with chemical and herbal forms of illnesses to administer small dosages to patients for treatment purposes",
              "<b>Directive interest</b> in <b>mentoring</b> patients by providing homeopathic health care and by suggesting lifestyle changes"
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
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 2,
                title: "Verbal interaction"
              },
              body_position: {
                name: "Body Position",
                value: 3,
                title: "Sitting, standing, walking"
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
            }
          }
        },
        {
          noc: 3232,
          sub_noc: "3232.1",
          sub_noc_title: "Acupuncturists",
          sub_noc_description:
            "Acupuncturists are practitioners of natural healing who provide an alternative form of health care to patients.",
          example_titles: ["acupuncturist"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 3,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 1,
              hearing_value: 2,
              body_position_value: 3,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["S", "I", "M"],
            dpt: {
              data_value: 1,
              people_value: 0,
              things_value: 1
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to diagnose and treat patients' diseases, physiological disorders and injuries using acupuncture and other therapies",
              "<b>Verbal ability</b> to arrange, through patients' physicians, for additional tests, analyses and X-rays, and to review patients' medical records",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to administer treatments by inserting acupuncture needles and through the use of heat, pressure, electric current or rays of light",
              "<b>Social interest</b> in <b>co-ordinating</b> information about patients' general physical conditions obtained from physicals and medical tests, and by observing and interviewing patients",
              "<b>Innovative interest</b> in <b>precision working</b> to insert acupuncture needles at precise points to correct energy imbalances in the body to treat disorders, relieve pain, and improve and maintain health",
              "<b>Methodical interest</b> in <b>mentoring</b> patients by diagnosing and treating disorders and injuries using the established techniques and methods of acupuncture and other therapies"
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
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 2,
                title: "Verbal interaction"
              },
              body_position: {
                name: "Body Position",
                value: 3,
                title: "Sitting, standing, walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        },
        {
          noc: 3232,
          sub_noc: "3232.5",
          sub_noc_title: "Reflexologists",
          sub_noc_description:
            "Reflexologists are practitioners of natural healing who provide an alternative form of health care to patients.",
          example_titles: ["reflexologist"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 3,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 3,
              limb_coordination_value: 1,
              strength_value: 1
            },
            interests: ["S", "I", "M"],
            dpt: {
              data_value: 2,
              people_value: 7,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to apply gentle finger pressure to specific spots on clients' hands and feet to promote relaxation and improved health and well-being",
              "<b>Social interest</b> in <b>analyzing</b> information provided by patients to determine appropriate pressure points for applying reflexology techniques",
              "<b>Innovative interest</b> in <b>manipulating</b> specific areas of patients' hands and feet by applying finger pressure to appropriate spots to promote well-being",
              "<b>Methodical interest</b> in <b>assisting</b> patients with their health conditions by providing an alternative form of health care through the application of reflexology methods and techniques"
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
                value: 3,
                title: "Sitting, standing, walking"
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
            }
          }
        },
        {
          noc: 3232,
          sub_noc: "3232.6",
          sub_noc_title: "Rolfers",
          sub_noc_description:
            "Rolfers are practitioners of natural healing who provide an alternative form of health care to patients.",
          example_titles: ["rolfer"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 3,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["S", "I", "M"],
            dpt: {
              data_value: 2,
              people_value: 7,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to assess extent of treatment required to reduce chronic pain and stress in various parts of the body",
              "<b>Social interest</b> in <b>analyzing</b> information provided by patients to determine areas and body structure requiring realignment and appropriate techniques to use",
              "<b>Innovative interest</b> in <b>manipulating</b> various parts of the body, such as the legs and shoulders, to realign body structures as a form of treatment for reducing chronic pain and stress",
              "<b>Methodical interest</b> in <b>assisting</b> patients with their health problems by providing an alternative form of health care through the systematic manipulation techniques used in rolfing"
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
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: "4423.4",
      noc_title: "Garbage Collection Inspectors",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "4423.4",
          sub_noc_title: "Garbage Collection Inspectors",
          sub_noc_description:
            "Garbage collection inspectors enforce garbage collection by-laws and regulations of provincial and municipal governments.",
          example_titles: ["garbage collection inspector"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 3,
              limb_coordination_value: 0,
              strength_value: 2
            },
            interests: ["M", "D", "s"],
            dpt: {
              data_value: 3,
              people_value: 6,
              things_value: 8
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to acquire knowledge of garbage collection by-laws",
              "<b>Verbal ability</b> to understand the technical language of garbage collection by-laws and communicate information effectively",
              "<b>Methodical interest</b> in <b>compiling</b> information to investigate complaints concerning infractions",
              "<b>Directive interest</b> in conducting investigations and enforcing adherence to by-laws",
              "<b>Social interest</b> in <b>speaking</b> with the public to advise on garbage collection by-laws"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
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
                value: 3,
                title: "Sitting, standing, walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 0,
                title: "Not relevant"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: "4423.2",
      noc_title: "By-law Enforcement Officers",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "4423.2",
          sub_noc_title: "By-law Enforcement Officers",
          sub_noc_description:
            "By-law enforcement officers enforce by-laws and regulations of provincial and municipal governments.",
          example_titles: [
            "by-law enforcement officer",
            "property standards inspector"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 3,
              limb_coordination_value: 0,
              strength_value: 1
            },
            interests: ["M", "D", "s"],
            dpt: {
              data_value: 3,
              people_value: 6,
              things_value: 8
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to acquire knowledge of by-laws and regulations",
              "<b>Verbal ability</b> to understand the technical language of by-laws and regulations, and to communicate information effectively",
              "<b>Methodical interest</b> in <b>compiling</b> information to investigate complaints",
              "<b>Directive interest</b> in enforcing municipal and provincial regulations",
              "<b>Social interest</b> in <b>speaking</b> to issue warnings and citations to commercial and residential property owners and occupants"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
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
                value: 3,
                title: "Sitting, standing, walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 0,
                title: "Not relevant"
              },
              strength: {
                name: "Strength",
                value: 1,
                title: "Limited"
              }
            }
          }
        }
      ]
    },
    {
      noc: "4423.5",
      noc_title: "Liquor Licence Inspectors",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "4423.5",
          sub_noc_title: "Liquor Licence Inspectors",
          sub_noc_description:
            "Liquor licence inspectors enforce liquor laws and regulations of provincial and municipal governments.",
          example_titles: ["liquor licence inspector"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 3,
              limb_coordination_value: 0,
              strength_value: 1
            },
            interests: ["M", "D", "s"],
            dpt: {
              data_value: 3,
              people_value: 6,
              things_value: 8
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to acquire knowledge of liquor laws and regulations",
              "<b>Verbal ability</b> to understand the technical language of liquor laws and regulations, and to communicate information effectively",
              "<b>Methodical interest</b> in <b>compiling</b> information to conduct inspections of licensed establishments",
              "<b>Directive interest</b> in reporting contravention of laws and regulations to provincial liquor control boards and agencies",
              "<b>Social interest</b> in <b>speaking</b> with licensees to advise on laws and regulations"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
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
                value: 3,
                title: "Sitting, standing, walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 0,
                title: "Not relevant"
              },
              strength: {
                name: "Strength",
                value: 1,
                title: "Limited"
              }
            }
          }
        }
      ]
    },
    {
      noc: "4423.6",
      noc_title: "Parking Control Officers",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "4423.6",
          sub_noc_title: "Parking Control Officers",
          sub_noc_description:
            "Parking control officers enforce parking control by-laws of provincial and municipal governments.",
          example_titles: ["parking control officer"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 3,
              limb_coordination_value: 1,
              strength_value: 1
            },
            interests: ["M", "D", "o"],
            dpt: {
              data_value: 5,
              people_value: 8,
              things_value: 3
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to acquire knowledge of parking by-laws",
              "<b>Motor co-ordination</b> to operate vehicles and issue tickets",
              "<b>Methodical interest</b> in <b>copying</b> to complete tickets indicating information such as dates, meter numbers and space areas, licence numbers and times of infractions",
              "<b>Directive interest</b> in enforcing parking by-laws on city streets, regional roads and municipal properties",
              "<b>Objective interest</b> in <b>driving</b> to patrol assigned areas of metered parking lots and sections of the city"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
              },
              colour: {
                name: "Colour Discrimination",
                value: 0,
                title: "Not relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 3,
                title: "Sitting, standing, walking"
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
            }
          }
        }
      ]
    },
    {
      noc: "4423.7",
      noc_title: "Taxi Inspectors",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "4423.7",
          sub_noc_title: "Taxi Inspectors",
          sub_noc_description:
            "Taxi inspectors enforce by-laws and regulations of provincial and municipal governments.",
          example_titles: ["taxi inspector"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 3,
              limb_coordination_value: 1,
              strength_value: 1
            },
            interests: ["M", "D", "o"],
            dpt: {
              data_value: 3,
              people_value: 6,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning</b> and <b>verbal ability</b> to issue citations and prepare reports",
              "<b>Methodical interest</b> in <b>compiling</b> information to investigate public complaints",
              "<b>Directive interest</b> in <b>speaking</b> to give evidence in court and to city councils and taxi commissions",
              "<b>Objective interest</b> in <b>operating – manipulating</b> to inspect taxis for mechanical reliability, cleanliness, licensing and meter accuracy"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
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
                value: 3,
                title: "Sitting, standing, walking"
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
            }
          }
        }
      ]
    },
    {
      noc: "4423.8",
      noc_title: "Zoning Inspectors",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "4423.8",
          sub_noc_title: "Zoning Inspectors",
          sub_noc_description:
            "Zoning inspectors investigate properties in violation of zoning and related by-laws of provincial and municipal governments.",
          example_titles: ["zoning inspector"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 3,
              limb_coordination_value: 0,
              strength_value: 1
            },
            interests: ["M", "D", "s"],
            dpt: {
              data_value: 3,
              people_value: 6,
              things_value: 8
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to acquire knowledge of zoning and related by-laws and regulations to respond to requests for licence clearances and building permit applications",
              "<b>Verbal ability</b> to understand the technical language of zoning by-laws and communicate information effectively",
              "<b>Methodical interest</b> in <b>compiling</b> information to investigate properties in violation of zoning by-laws",
              "<b>Directive interest</b> in conducting investigations and enforcing adherence to zoning by-laws",
              "<b>Social interest</b> in <b>speaking</b> to issue warnings and citations to commercial and residential property owners and occupants"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
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
                value: 3,
                title: "Sitting, standing, walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 0,
                title: "Not relevant"
              },
              strength: {
                name: "Strength",
                value: 1,
                title: "Limited"
              }
            }
          }
        }
      ]
    },
    {
      noc: 8255,
      noc_title: "Landscaping and Grounds Maintenance Contractors and Managers",
      sub_nocs: [
        {
          noc: 8255,
          sub_noc: "8255.1",
          sub_noc_title: "Supervisors, Landscape and Horticulture",
          sub_noc_description:
            "Supervisors, landscape and horticulture supervise and co-ordinate the activities of workers in the following groups:  <i>Nursery and Greenhouse Workers</i> (8432) and <i>Landscaping and Grounds Maintenance Labourers</i> (8612).",
          example_titles: [
            "greenhouse supervisor",
            "groundskeeper supervisor",
            "horticulture worker supervisor",
            "landscaping foreman/woman",
            "nursery foreman/woman",
            "park maintenance supervisor"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 3,
              colour_value: 1,
              hearing_value: 2,
              body_position_value: 3,
              limb_coordination_value: 0,
              strength_value: 2
            },
            interests: ["D", "S", "M"],
            dpt: {
              data_value: 1,
              people_value: 3,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to supervise and co-ordinate the activities of workers to provide landscaping and horticultural services and to establish work procedures; may perform the same duties as workers",
              "<b>Verbal ability</b> to train workers in job duties and company policies, and to prepare progress and other reports",
              "<b>Directive interest</b> in <b>supervising</b> workers who maintain lawns, gardens, athletic fields, golf courses, cemeteries, parks, interior plantscapes and other landscaped areas, who spread topsoil and lay sod, who spray, prune, cut and remove trees and shrubs, who construct landscape and landscape structures and plant, cultivate and harvest trees, shrubs, flowers and plants",
              "<b>Social interest</b> in <b>co-ordinating</b> information to resolve work-related problems, to establish work schedules and to co-ordinate activities with other units",
              "<b>Methodical interest</b> in <b>operating</b> equipment for landscaping and grounds maintenance; and in requisitioning supplies and materials and in submitting progress and other reports"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
              },
              colour: {
                name: "Colour Discrimination",
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 2,
                title: "Verbal interaction"
              },
              body_position: {
                name: "Body Position",
                value: 3,
                title: "Sitting, standing, walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 0,
                title: "Not relevant"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: "3237.5",
      noc_title:
        "Physiotherapy Assistants and Occupational _x000d_\nTherapy Assistants",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "3237.5",
          sub_noc_title:
            "Physiotherapy Assistants and Occupational _x000d_\nTherapy Assistants",
          sub_noc_description:
            "Physiotherapy assistants and occupational therapy assistants assist physiotherapists and/or occupational therapists in treating patients with injuries and physical disabilities.",
          example_titles: [
            "occupational therapy assistant",
            "physiotherapy technician"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 3,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 3,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["M", "S", "O"],
            dpt: {
              data_value: 3,
              people_value: 7,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to carry out, under a physiotherapist's direction, treatment programs such as massage, thermotherapy, traction and hydrotherapy to rehabilitate patients with injuries and physical impairments",
              "<b>Methodical interest</b> in <b>compiling</b> information on treatments to maintain patients' records",
              "<b>Social interest</b> in <b>assisting</b> patients by providing therapeutic treatments and fitting them with crutches, splints and other devices",
              "<b>Objective interest</b> in <b>operating</b> equipment to carry out treatment programs as directed by physiotherapists"
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
                value: 3,
                title: "Sitting, standing, walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: "6541.1",
      noc_title: "Corporate Security Officers",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "6541.1",
          sub_noc_title: "Corporate Security Officers",
          sub_noc_description:
            "Corporate security officers conduct private investigations for clients and employers, implement security measures to protect properties against theft and fire, and provide other protective services.",
          example_titles: [
            "alarm investigator",
            "corporate security officer",
            "house detective",
            "postal inspection officer"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 3,
              limb_coordination_value: 0,
              strength_value: 1
            },
            interests: ["M", "D", "s"],
            dpt: {
              data_value: 3,
              people_value: 6,
              things_value: 8
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning</b> and <b>verbal ability</b> to understand and apply techniques used to conduct private investigations",
              "<b>Methodical interest</b> in <b>compiling</b> information to investigate unlawful acts of employees and patrons of establishments",
              "<b>Directive interest</b> in recommending security systems such as electronic detection devices and access devices",
              "<b>Social interest</b> in <b>speaking</b> to question individuals to obtain information and evidence"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
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
                value: 3,
                title: "Sitting, standing, walking"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 0,
                title: "Not relevant"
              },
              strength: {
                name: "Strength",
                value: 1,
                title: "Limited"
              }
            }
          }
        }
      ]
    },
    {
      noc: "6541.3",
      noc_title: "Retail Loss Prevention Officers",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "6541.3",
          sub_noc_title: "Retail Loss Prevention Officers",
          sub_noc_description:
            "Retail loss prevention officers conduct private investigations for clients and employers, implement security measures to protect properties against theft and fire, and provide other protective services.",
          example_titles: [
            "retail loss prevention officer",
            "store detective",
            "theft prevention officer"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 3,
              limb_coordination_value: 1,
              strength_value: 1
            },
            interests: ["M", "d", "s"],
            dpt: {
              data_value: 3,
              people_value: 6,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to prevent and detect shoplifting and theft in retail establishments",
              "<b>Verbal ability</b> to prepare reports of investigations for authorities",
              "<b>Methodical interest</b> in <b>compiling</b> information to conduct investigations on own initiative or on employers' requests",
              "<b>Directive interest</b> in <b>handling</b> to perform duties of regular employees such as selling and stock checking",
              "<b>Social interest</b> in <b>speaking</b> to question individuals and suspects in attempts to secure evidence and personal admissions relating to cases being investigated"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
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
                value: 3,
                title: "Sitting, standing, walking"
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
            }
          }
        }
      ]
    },
    {
      noc: "3237.3",
      noc_title: "Communication Assistants",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "3237.3",
          sub_noc_title: "Communication Assistants",
          sub_noc_description:
            "Communication assistants assist speech-language pathologists with remedial programs.",
          example_titles: [
            "communicative disorders assistant",
            "speech technician",
            "speech therapy aide"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 3,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 3,
              limb_coordination_value: 1,
              strength_value: 1
            },
            interests: ["M", "S", "O"],
            dpt: {
              data_value: 3,
              people_value: 7,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to carry out remedial programs, under the supervision of speech-language pathologists, to rehabilitate patients with communicative disorders",
              "<b>Methodical interest</b> in <b>compiling</b> information on patients' progress",
              "<b>Social interest</b> in <b>assisting</b> patients in remedial programs by instructing them on ways to improve communication skills",
              "<b>Objective interest</b> in <b>handling</b> equipment and materials used for remedial programs "
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
                value: 3,
                title: "Sitting, standing, walking"
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
            }
          }
        }
      ]
    },
    {
      noc: "9524.1",
      noc_title:
        "Assemblers, Electrical Appliance, Apparatus and Equipment Manufacturing",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "9524.1",
          sub_noc_title:
            "Assemblers, Electrical Appliance, Apparatus and Equipment Manufacturing",
          sub_noc_description:
            "Assemblers in this group assemble prefabricated parts to produce household, commercial and industrial appliances and equipment. Workers who set up and prepare assembly lines for operation are included in this group.",
          example_titles: [
            "electrical appliances assembler",
            "circuit breaker assembler",
            "electric clothes dryer assembler",
            "coffee maker assembler",
            "dishwasher assembler",
            "hair dryer assembler",
            "electric lawn mower assembler",
            "electrical equipment production assembler",
            "electric refrigerator assembler"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 3,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 1,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["M", "O", "i"],
            dpt: {
              data_value: 5,
              people_value: 8,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to assemble prefabricated parts on assembly lines and at work benches, using screw guns and other hand and power tools",
              "<b>Motor co-ordination</b> and <b>finger dexterity</b> to wind coils and armatures for small motors and transformers",
              "<b>Manual dexterity</b> to position and fasten components, such as springs, toggles and other parts, into assembly casings",
              "<b>Methodical interest</b> in <b>copying</b> information to assemble small and large household appliances, and small transformers, motors and transmissions used in appliances and other electrical products",
              "<b>Objective interest</b> in <b>operating</b> equipment to assemble circuit breakers, switches and other electrical control equipment; and in setting up assembly lines with materials and supplies",
              "<b>Innovative interest</b> in setting up and adjusting production tools, and in performing minor repairs to products rejected from production assembly lines"
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
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: "9534.1",
      noc_title: "Furniture Finishers",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "9534.1",
          sub_noc_title: "Furniture Finishers",
          sub_noc_description:
            "Furniture finishers finish new wood or metal furniture to specified colour and finish.",
          example_titles: [
            "furniture finisher",
            "furniture stainer",
            "touch-up person - furniture finishing",
            "trimmer - furniture finishing",
            "wash-off operator - furniture finishing",
            "wood finisher - furniture finishing and refinishing"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 1,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["O", "M", "I"],
            dpt: {
              data_value: 6,
              people_value: 8,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to set up and operate finishing machines or finish furniture by hand",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to apply lacquers and other sealers, to spray metal furniture with paint and other materials, and to clean and polish furniture",
              "<b>Objective interest</b> in <b>operating</b> equipment to sand metal furniture to prepare for finish; and in using brushes and spray guns",
              "<b>Methodical interest</b> in <b>comparing</b> information to stain and finish wood to specified colour with stains, paints and other materials and to apply toners, highlights, glazes and shaders to obtain desired finish",
              "<b>Innovative interest</b> in decorating wood surfaces and marking them to create antique and other effects using hand and power tools"
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
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: "9534.2",
      noc_title: "Furniture Refinishers",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "9534.2",
          sub_noc_title: "Furniture Refinishers",
          sub_noc_description:
            "Furniture refinishers refinish repaired, used or old furniture.",
          example_titles: ["furniture refinisher", "furniture stripper"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 1,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["O", "M", "I"],
            dpt: {
              data_value: 6,
              people_value: 8,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to refinish repaired, used and old furniture",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to strip old finish from wood surfaces using steel wool, sandpaper and solvents, to smooth gouges with wood fillers, to sand wood, and to polish and wax refinished surfaces",
              "<b>Objective interest</b> in <b>operating</b> equipment to sand and grind metal surfaces to prepare for coatings, and to paint metal surfaces using electrostatic methods, spray guns and other painting equipment; may perform duties of furniture finisher",
              "<b>Methodical interest</b> in <b>comparing</b> to match colours to obtain original finishes",
              "<b>Innovative interest</b> in applying appropriate finishes to stripped wood; and in making minor repairs"
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
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: "9535.1",
      noc_title: "Plastic Products Assemblers and Finishers",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "9535.1",
          sub_noc_title: "Plastic Products Assemblers and Finishers",
          sub_noc_description:
            "Plastics products assemblers and finishers assemble, finish plastic parts and finished products.",
          example_titles: [
            "fibreglass laminator",
            "plastic bottle trimmer",
            "plastic parts assembler",
            "plastic tank assembler",
            "plastic products fabricator",
            "plastics assembler",
            "plastics trimmer",
            "skylight assembler - plastic products manufacturing"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 5,
              people_value: 8,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to assemble and finish plastic parts and products",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to operate spray guns in order to apply resin mixtures to metal and wood moulds to form plastic products",
              "<b>Objective interest</b> in <b>operating</b> machines, equipment and hand tools to cut, shape, splice and fit plastic materials to form parts and assemblies, and in operating finishing equipment to trim, grind and buff products into final form",
              "<b>Methodical interest</b> in <b>copying</b> information to assemble composite materials on patterns to form parts and assemblies using bonding agents",
              "<b>Innovative interest</b> in loading and operating autoclave ovens to cure and bond parts and subassemblies"
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: "9537.1",
      noc_title: "Other Assemblers",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "9537.1",
          sub_noc_title: "Other Assemblers",
          sub_noc_description:
            "Workers in this group inspect assembled products such as jewellery, silverware, buttons, pencils, non-prescription lenses, brushes, clocks and watches, musical instruments, sporting good and toys.",
          example_titles: [
            "Venetian blind assembler",
            "antenna assembler",
            "bicycle assembler",
            "eyeglass frame assembler",
            "golf club assembler",
            "lampshade assembler",
            "watch assembler"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 3,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 1,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 5,
              people_value: 8,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to assemble products such as jewellery, silverware, clocks and watches, musical instruments, sporting goods and toys",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to cut, shape and fit materials to form parts and components",
              "<b>Finger dexterity</b> to screw, clip, glue, bond, weld and otherwise assemble parts and components",
              "<b>Objective interest</b> in <b>operating</b> equipment and using hand tools to bring products to final form by sanding, trimming, grinding and cleaning",
              "<b>Methodical interest</b> in <b>copying</b> information to assemble parts and components to form products",
              "<b>Innovative interest</b> in making minor adjustments and repairs"
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
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: 9434,
      noc_title: "Other Wood Processing Machine Operators",
      sub_nocs: [
        {
          noc: 9434,
          sub_noc: "9434",
          sub_noc_title: "Other Wood Processing Machine Operators",
          sub_noc_description:
            "Machine operators in this group operate and tend wood processing equipment and machines to remove bark from logs, produce wood chips, preserve and treat wood, and produce waferboards, particleboards, hardboards, insulation boards, plywood, veneers and similar wood products.",
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 5,
              people_value: 8,
              things_value: 4
            }
          },
          descriptor_profile: {},
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
              },
              colour: {
                name: "Colour Discrimination",
                value: 0,
                title: "Not relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: 3234,
      noc_title: "Ambulance Attendants and Other Paramedical Occupations",
      sub_nocs: [
        {
          noc: 3234,
          sub_noc: "3234",
          sub_noc_title: "Paramedical Occupations",
          sub_noc_description:
            "This group includes workers who administer pre-hospital emergency medical care to patients with injuries or medical illnesses and transport them to hospitals or other medical facilities for further medical care. Paramedics who are supervisors are included in this group.",
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 3,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 4,
              colour_value: 1,
              hearing_value: 3,
              body_position_value: 4,
              limb_coordination_value: 2,
              strength_value: 4
            },
            interests: ["I", "M", "O"],
            dpt: {
              data_value: 3,
              people_value: 7,
              things_value: 4
            }
          },
          descriptor_profile: {},
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 4,
                title: "Total visual field"
              },
              colour: {
                name: "Colour Discrimination",
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 3,
                title: "Other sound discrimination"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 2,
                title: "Multiple limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 4,
                title: "Heavy"
              }
            }
          }
        }
      ]
    },
    {
      noc: "3236",
      noc_title: "Massage Therapists",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "3236",
          sub_noc_title: "Massage Therapists",
          sub_noc_description:
            "Massage therapists assess soft tissues and joints of the body for treatment and prevention of dysfunction, injury, pain and physical disorders.",
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 3,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["M", "S", "O"],
            dpt: {
              data_value: 2,
              people_value: 7,
              things_value: 4
            }
          },
          descriptor_profile: {},
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
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: 3413,
      noc_title: "Nurse Aides, Orderlies and Patient Service Associates",
      sub_nocs: [
        {
          noc: 3413,
          sub_noc: "3413",
          sub_noc_title:
            "Nurse Aides, Orderlies and Patient Service Associates",
          sub_noc_description:
            "Nurse aides, orderlies and patient service associates assist nurses, hospital staff and physicians in the basic care of patients.",
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["S", "M", "o"],
            dpt: {
              data_value: 5,
              people_value: 7,
              things_value: 4
            }
          },
          descriptor_profile: {},
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
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: 4214,
      noc_title: "Early Childhood Educators and Assistants",
      sub_nocs: [
        {
          noc: 4214,
          sub_noc: "4214.1",
          sub_noc_title: "Early Childhood Educators",
          sub_noc_description:
            "Early childhood educators plan, organize, and implement programs for children between the ages of infancy and 12 years. They lead children in activities to stimulate and develop their intellectual, physical and emotional growth and ensure their security and well-being. Supervisors of early childhood educators are included in this group.",
          example_titles: [
            "daycare supervisor",
            "daycare worker",
            "early childhood education worker",
            "early childhood educator (E.C.E.)",
            "early childhood educator - preschool",
            "early childhood supervisor",
            "preschool supervisor"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 3,
              colour_value: 1,
              hearing_value: 2,
              body_position_value: 4,
              limb_coordination_value: 2,
              strength_value: 3
            },
            interests: ["S", "M", "d"],
            dpt: {
              data_value: 3,
              people_value: 2,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to plan, develop, organize and implement daily activities for children, and to observe children for signs of learning disabilities or emotional problems",
              "<b>Verbal ability</b> to discuss progress or problems of children with parents and other staff members, and to attend meetings and workshops to develop and discuss new teaching methods",
              "<b>Social interest</b> in <b>instructing</b> and guiding children in the development of proper eating, dressing and personal hygiene; in leading children in activities by telling or reading stories, teaching songs, providing opportunities for creative expression through the mediums of art, dramatic play, music and physical fitness, and taking them to local points of interest",
              "<b>Methodical interest</b> in <b>handling</b> to prepare and demonstrate the use of craft materials and to demonstrate the use of simple musical instruments",
              "<b>Directive interest</b> in <b>compiling</b> information to develop daily activities for children; may plan and organize activities for school and children in child care programs before and after regular school hours; may supervise and co-ordinate the activities of other early childhood educators and assistants"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
              },
              colour: {
                name: "Colour Discrimination",
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 2,
                title: "Verbal interaction"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 2,
                title: "Multiple limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        },
        {
          noc: 4214,
          sub_noc: "4214.2",
          sub_noc_title: "Early Childhood Educator Assistants",
          sub_noc_description:
            "Early childhood educator assistants provide care for infants and preschool- to school-age children under the guidance of early childhood educators. They lead children in activities to stimulate and develop their intellectual, physical and emotional growth and ensure their security and well-being.",
          example_titles: [
            "child care worker assistant",
            "daycare helper",
            "early childhood assistant",
            "early childhood education worker",
            "early childhood program staff assistant",
            "preschool helper"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 4,
              colour_value: 1,
              hearing_value: 2,
              body_position_value: 4,
              limb_coordination_value: 2,
              strength_value: 3
            },
            interests: ["S", "M", "d"],
            dpt: {
              data_value: 5,
              people_value: 7,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning</b> and <b>verbal ability</b> to submit written observations on children to supervisors, and to attend staff meetings to discuss children's progress and problems",
              "<b>Social interest</b> in <b>assisting</b> children in the development of proper eating and dressing habits and personal hygiene",
              "<b>Methodical interest</b> in <b>copying</b> information to assist supervisors in keeping records; in preparing and serving snacks, maintaining day-care equipment and assisting with housekeeping duties; and in arranging rooms and furniture for lunch and rest periods",
              "<b>Directive interest</b> in <b>handling</b> to lead children's activities by telling stories, teaching songs and preparing craft materials; and in conducting and monitoring activity programs designed for young children"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 4,
                title: "Total visual field"
              },
              colour: {
                name: "Colour Discrimination",
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 2,
                title: "Verbal interaction"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 2,
                title: "Multiple limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: "4411.2",
      noc_title: "Foster Parents",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "4411.2",
          sub_noc_title: "Foster Parents",
          sub_noc_description:
            "Foster parents care for children as family members under the direction of foster-parent agencies.",
          example_titles: ["foster parent"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["S", "I", "D"],
            dpt: {
              data_value: 3,
              people_value: 7,
              things_value: 8
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning</b> and <b>verbal ability</b> to care for foster children, usually on an emergency or temporary basis, as family members under the general direction of foster-parent agencies",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to carry out various child-care activities",
              "<b>Social interest</b> in consulting foster-parent agency supervisors for advice and when problems arise",
              "<b>Innovative interest</b> in <b>compiling</b> information to apply knowledge and techniques of child care",
              "<b>Directive interest</b> in <b>serving – assisting</b> to administer therapeutic programs for foster children as directed by foster-agency social workers"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
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
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: "4412.1",
      noc_title: "Visiting Homemakers",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "4412.1",
          sub_noc_title: "Visiting Homemakers",
          sub_noc_description:
            "Visiting homemakers provide ongoing and short-term home support services for individuals and families during periods of incapacitation, convalescence and family disruption.",
          example_titles: [
            "home support worker",
            "personal aide - home support",
            "personal care attendant - home care",
            "respite worker - home support"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["S", "M", "o"],
            dpt: {
              data_value: 3,
              people_value: 7,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning</b> and <b>verbal ability</b> to care for individuals and families during periods of incapacitation, convalescence and family disruption",
              "<b>Social interest</b> in <b>serving – assisting</b> clients by administering bedside and personal care such as aid in walking, bathing, personal hygiene and dressing and undressing; by feeding or assisting in feeding clients; and in demonstrating infant care to new parents",
              "<b>Methodical interest</b> in <b>compiling</b> information to maintain client files and plan meals and special diets",
              "<b>Objective interest</b> in <b>handling</b> the preparation of meals and special diets; may perform routine housekeeping duties such as laundry, washing dishes and making beds; may perform routine health-related duties such as change non-sterile dressings, administer medications and collect specimens under the direction of a home-care agency supervisor or nurse"
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
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: "4412.2",
      noc_title: "Housekeepers",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "4412.2",
          sub_noc_title: "Housekeepers",
          sub_noc_description:
            "Housekeepers perform housekeeping and other home management duties.",
          example_titles: ["housekeeper"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["M", "O", "s"],
            dpt: {
              data_value: 5,
              people_value: 7,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b>, <b>motor co-ordination</b> and <b>manual dexterity</b> to carry out home management duties",
              "<b>Methodical interest</b> in <b>copying</b> information to work under general direction of employers, and to plan and prepare meals independently or with employers",
              "<b>Objective interest</b> in <b>handling</b> cleaning materials and equipment to perform housekeeping tasks",
              "<b>Social interest</b> in <b>serving – assisting</b> to perform housekeeping duties; may serve meals and care for children"
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: "4412.3",
      noc_title: "Companions",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "4412.3",
          sub_noc_title: "Companions",
          sub_noc_description:
            "Companions provide elderly and convalescent clients with companionship and personal care in residential and institutional settings.",
          example_titles: [
            "_x000d_\n personal aide - home support",
            "companion",
            "personal aide – home support"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["S", "M", "o"],
            dpt: {
              data_value: 5,
              people_value: 7,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning</b> and <b>verbal ability</b> to provide elderly and convalescent clients with companionship and personal care in clients' homes",
              "<b>Social interest</b> in <b>serving – assisting</b> clients by providing aid with walking, bathing and other aspects of personal hygiene",
              "<b>Methodical interest</b> in <b>copying</b> to carry out activities under general direction of home-care agency supervisor or family members",
              "<b>Objective interest</b> in <b>handling</b> to perform various activities related to the provision of personal care"
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
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: "4423.1",
      noc_title: "Animal Control Officers",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "4423.1",
          sub_noc_title: "Animal Control Officers",
          sub_noc_description:
            "Animal control officers enforce animal control by-laws and regulations of provincial and municipal governments.",
          example_titles: ["animal control officer"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 4,
              limb_coordination_value: 2,
              strength_value: 3
            },
            interests: ["M", "D", "s"],
            dpt: {
              data_value: 5,
              people_value: 6,
              things_value: 3
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to acquire knowledge of animal control by-laws and regulations",
              "<b>Manual dexterity</b> to operate vehicles and handle animals",
              "<b>Methodical interest</b> in <b>copying</b> to issue warnings and citations to owners",
              "<b>Directive interest</b> in <b>driving</b> to impound lost, homeless and dangerous animals",
              "<b>Social interest</b> in <b>speaking</b> to citizens in response to complaints concerning stray domestic animals, livestock and wildlife"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
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
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 2,
                title: "Multiple limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: "6541.4",
      noc_title: "Security Guards",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "6541.4",
          sub_noc_title: "Security Guards",
          sub_noc_description:
            "Security guards and other related workers guard property against theft and vandalism, control access to establishments, maintain order and enforce regulations at public events and within organizations or areas.",
          example_titles: [
            "airport security guard",
            "bodyguard (except police)",
            "commissionaire",
            "gate attendant - security",
            "night guard",
            "preboarding security guard",
            "security guard"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 4,
              colour_value: 0,
              hearing_value: 3,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["M", "s", "d"],
            dpt: {
              data_value: 5,
              people_value: 6,
              things_value: 3
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to understand and apply security regulations",
              "<b>Verbal ability</b> to communicate with police, fire and civil defence authorities and the general public",
              "<b>Form perception</b> to patrol assigned areas, on foot or in vehicles, to guard against theft, shoplifting, vandalism and fire",
              "<b>Methodical interest</b> in <b>copying</b> to perform security checks of passengers and luggage at airports; to operate security control room equipment to monitor establishment activities; to ensure that establishment safety and emergency procedures are followed; and to enforce regulations of establishments to maintain order",
              "<b>Social interest</b> in <b>speaking</b> with visitors to control access to organizations, issue passes and direct them to appropriate areas",
              "<b>Directive interest</b> in <b>driving</b> and guarding armoured trucks when delivering cash and valuables to banks, automated teller machines and retail establishments; and in responding to fire alarms, bomb threats and other emergencies"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 4,
                title: "Total visual field"
              },
              colour: {
                name: "Colour Discrimination",
                value: 0,
                title: "Not relevant"
              },
              hearing: {
                name: "Hearing",
                value: 3,
                title: "Other sound discrimination"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: "6541.5",
      noc_title: "Armoured Car Guards",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "6541.5",
          sub_noc_title: "Armoured Car Guards",
          sub_noc_description:
            "Armoured car guards drive and guard armoured trucks, pick-up and deliver cash and valuables to banks, automated teller machines and retail establishments.",
          example_titles: [
            "armoured car guard",
            "automatic teller machine (ATM) guard"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 4,
              colour_value: 0,
              hearing_value: 3,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["M", "s", "d"],
            dpt: {
              data_value: 5,
              people_value: 6,
              things_value: 3
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to understand and apply security regulations",
              "<b>Verbal ability</b> to communicate with police, fire and civil defence authorities and the general public",
              "<b>Form perception</b> to patrol assigned areas, on foot or in vehicles, to guard against theft, shoplifting, vandalism and fire",
              "<b>Methodical interest</b> in <b>copying</b> to perform security checks of passengers and luggage at airports; to operate security control room equipment to monitor establishment activities; to ensure that establishment safety and emergency procedures are followed; and to enforce regulations of establishments to maintain order",
              "<b>Social interest</b> in <b>speaking</b> with visitors to control access to organizations, issue passes and direct them to appropriate areas",
              "<b>Directive interest</b> in <b>driving</b> and guarding armoured trucks when delivering cash and valuables to banks, automated teller machines and retail establishments; and in responding to fire alarms, bomb threats and other emergencies"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 4,
                title: "Total visual field"
              },
              colour: {
                name: "Colour Discrimination",
                value: 0,
                title: "Not relevant"
              },
              hearing: {
                name: "Hearing",
                value: 3,
                title: "Other sound discrimination"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: "6563",
      noc_title: "Pet Groomers and Animal Care Workers",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "6563",
          sub_noc_title: "Pet Groomers and Animal Care Workers",
          sub_noc_description:
            "Animal care workers feed, handle, train and groom animals and assist veterinarians, animal health technologists and technicians and animal breeders. Pet groomers clip coats, bathe and otherwise groom pets.",
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 3,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["M", "O", "D"],
            dpt: {
              data_value: 6,
              people_value: 7,
              things_value: 7
            }
          },
          descriptor_profile: {},
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: 6622,
      noc_title: "Grocery Clerks and Store Shelf Stockers",
      sub_nocs: [
        {
          noc: 6622,
          sub_noc: "6622",
          sub_noc_title: "Store Shelf Stockers, Clerks and Order Fillers",
          sub_noc_description:
            "Store shelf stockers, clerks and order fillers pack customers' purchases, price items, stock shelves with merchandise, and fill mail and telephone orders.",
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["M", "s", "o"],
            dpt: {
              data_value: 6,
              people_value: 7,
              things_value: 7
            }
          },
          descriptor_profile: {},
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
              },
              colour: {
                name: "Colour Discrimination",
                value: 0,
                title: "Not relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: "6732.1",
      noc_title: "Carpet and Upholstery Cleaners",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "6732.1",
          sub_noc_title: "Carpet and Upholstery Cleaners",
          sub_noc_description:
            "Carpet and upholstery cleaners clean carpets and upholstery using specialized equipment and techniques.",
          example_titles: ["carpet cleaner", "upholstery cleaner"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 1,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["O", "M", "d"],
            dpt: {
              data_value: 6,
              people_value: 8,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to understand and apply carpet- and upholstery-cleaning techniques",
              "<b>Manual dexterity</b> to apply various cleaning products and techniques to clean carpets, rugs and upholstered furniture",
              "<b>Objective interest</b> in <b>operating</b> specialized cleaning machines",
              "<b>Methodical interest</b> in <b>comparing</b> to clean carpets, rugs and upholstered furniture on customers' premises or in carpet- and upholstery-cleaning establishments",
              "<b>Directive interest</b> in selecting appropriate cleaning agents to remove stains from materials"
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
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: "6733",
      noc_title: "Janitors, Caretakers and Building Superintendents",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "6733",
          sub_noc_title: "Janitors, Caretakers and Building Superintendents",
          sub_noc_description:
            "Janitors, caretakers and building superintendents clean and maintain the interior and exterior of commercial, institutional and residential buildings and their surrounding grounds. Building superintendents employed in large establishments are responsible for the operation of the establishment and may also supervise other workers.",
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["M", "O", "I"],
            dpt: {
              data_value: 5,
              people_value: 8,
              things_value: 4
            }
          },
          descriptor_profile: {},
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
              },
              colour: {
                name: "Colour Discrimination",
                value: 0,
                title: "Not relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: "6742.4",
      noc_title: "Laundromat Attendants",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "6742.4",
          sub_noc_title: "Laundromat Attendants",
          sub_noc_description:
            "Laundromat attendants provide services in laundromats.",
          example_titles: ["laundromat attendant"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 2
            },
            interests: ["M", "O", "s"],
            dpt: {
              data_value: 6,
              people_value: 6,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to understand and follow standard procedures",
              "<b>Methodical interest</b> in <b>comparing</b> to clean laundromats; and in arranging for the repair of broken machines; may wash, dry and fold laundry for customers",
              "<b>Objective interest</b> in <b>handling</b> to replenish vending machines; may operate dry cleaning machines for customers",
              "<b>Social interest</b> in <b>speaking</b> to customers when providing change and explaining operation of machines"
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
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 2,
                title: "Light"
              }
            }
          }
        }
      ]
    },
    {
      noc: 7362,
      noc_title: "Railway Conductors and Brakemen/women",
      sub_nocs: [
        {
          noc: 7362,
          sub_noc: "7362.2",
          sub_noc_title: "Brakemen/women",
          sub_noc_description:
            "Brakemen check train brakes and other systems and equipment prior to train run, and assist railway conductors in activities en route.",
          example_titles: [
            "brakeman/woman",
            "front-end brakeman/woman",
            "road freight brakeman/woman",
            "tail-end brakeman/woman"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 4,
              colour_value: 1,
              hearing_value: 3,
              body_position_value: 4,
              limb_coordination_value: 2,
              strength_value: 3
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 5,
              people_value: 6,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to understand orders received from traffic controllers, to observe signals and track conditions and to open and close track switches",
              "<b>Manual dexterity</b> to check systems and equipment, such as air conditioning and heating systems, brakes and brake hoses, before departure",
              "<b>Objective interest</b> in <b>operating</b> equipment to make minor repairs to couplings, air hoses and wheel-bearing boxes; and in setting and releasing hand brakes, connecting air brake hoses, and in coupling and switching passenger and freight cars",
              "<b>Methodical interest</b> in <b>copying</b> information to check systems and equipment such as air conditioning and heating systems, brakes and brake hoses before departure",
              "<b>Innovative interest</b> in <b>speaking – signalling</b> to communicate with train crews by radio, signals and other means to aid operations, and to assist in collecting fares and in helping passengers on and off trains"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 4,
                title: "Total visual field"
              },
              colour: {
                name: "Colour Discrimination",
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 3,
                title: "Other sound discrimination"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 2,
                title: "Multiple limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: 7442,
      noc_title: "Waterworks and Gas Maintenance Workers",
      sub_nocs: [
        {
          noc: 7442,
          sub_noc: "7442.1",
          sub_noc_title: "Waterworks Maintenance Workers",
          sub_noc_description:
            "Waterworks maintenance workers maintain and repair waterworks equipment and facilities.",
          example_titles: [
            "pipeline maintenance worker",
            "pipeline patrolman/woman",
            "utility plant maintenance worker",
            "waterworks maintenance worker"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["M", "O", "i"],
            dpt: {
              data_value: 5,
              people_value: 7,
              things_value: 1
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to maintain and repair waterworks equipment and facilities",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to install water meters using hand and power tools",
              "<b>Methodical interest</b> in <b>copying</b> to check, clean and lubricate waterworks equipment such as pumping equipment, chlorination equipment and compressors",
              "<b>Objective interest</b> in <b>precision working</b> to search and locate reported water leaks and repair water mains, valves and outlets",
              "<b>Innovative interest</b> in <b>assisting</b> to adjust and repair waterworks equipment under the direction of qualified tradespersons"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
              },
              colour: {
                name: "Colour Discrimination",
                value: 0,
                title: "Not relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: 7452,
      noc_title: "Material Handlers",
      sub_nocs: [
        {
          noc: 7452,
          sub_noc: "7452.1",
          sub_noc_title: "Material Handlers (Manual)",
          sub_noc_description:
            "Material handlers (manual) handle, move, load and unload materials by hand.",
          example_titles: [
            "bin filler",
            "coal handler",
            "freight handler (except air transport)",
            "furniture mover",
            "lumber piler – building supplies",
            "material handler",
            "railway car loader",
            "stockpiler",
            "storage worker – material handling",
            "truck loader",
            "warehouseman/woman"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 2,
              strength_value: 4
            },
            interests: ["M", "O", "i"],
            dpt: {
              data_value: 6,
              people_value: 8,
              things_value: 6
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to understand loading schedules and instructions",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to load, unload and move products and materials by hand and by using basic material handling equipment",
              "<b>Methodical interest</b> in <b>comparing</b> information to perform other material handling activities such as counting, weighing, sorting, packing and unpacking",
              "<b>Objective interest</b> in <b>feeding – offbearing</b> to move household appliances and furniture on and off moving trucks and vans",
              "<b>Innovative interest</b> in arranging articles in vans to form compact loads and in securing articles to prevent damage and breakage"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
              },
              colour: {
                name: "Colour Discrimination",
                value: 0,
                title: "Not relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 2,
                title: "Multiple limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 4,
                title: "Heavy"
              }
            }
          }
        },
        {
          noc: 7452,
          sub_noc: "7452.2",
          sub_noc_title: "Material Handlers (Equipment Operators)",
          sub_noc_description:
            "Material handlers (equipment operators) handle, move, load and unload materials by using a variety of material handling equipment.",
          example_titles: [
            "conveyor console operator",
            "forklift truck operator",
            "freight handler (except air transport)",
            "material handler"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 2,
              strength_value: 3
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 6,
              people_value: 8,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to operate winches and other loading devices to load and unload materials on and off trucks, railway cars and loading docks of warehouses and industrial establishments",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to connect hoses and pipes; to operate equipment to load and unload liquid petroleum, chemical and other products into and from tank cars, tank trucks and storage tanks; and to operate equipment to load and unload materials such as coal, ore and grain into and from railway cars, trucks and other vehicles",
              "<b>Objective interest</b> in <b>operating</b> winches and other loading devices, industrial trucks, tractors, conveyors, loaders and other equipment to transport materials, grain and other materials from transportation vehicles to storage tanks, elevators, bins and other storage areas",
              "<b>Methodical interest</b> in <b>comparing</b> information to transport materials to and from transportation vehicles and loading docks, and to store and retrieve materials in warehouses; may assist in taking inventory and weighing and checking materials, opening containers and crates and filling warehouse orders",
              "<b>Innovative interest</b> in performing minor repairs to conveyors and other loading and unloading equipment"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
              },
              colour: {
                name: "Colour Discrimination",
                value: 0,
                title: "Not relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 2,
                title: "Multiple limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: "7532.2",
      noc_title: "Water Transport Deck Crew",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "7532.2",
          sub_noc_title: "Water Transport Deck Crew",
          sub_noc_description:
            "Deck crew in this group stand watch, operate and maintain deck equipment and perform other deck and bridge duties aboard ships and self-propelled vessels under the direction of deck officers.",
          example_titles: [
            "able seaman/woman (except armed forces)",
            "deckhand",
            "helmsman/woman - water transport",
            "ship tunnel operator",
            "boatswain - water transport"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 4,
              colour_value: 1,
              hearing_value: 3,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 4
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 6,
              people_value: 8,
              things_value: 3
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to serve as members of deck crews aboard ships performing duties such as standing watch, steering, operating, maintaining and repairing deck equipment",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to handle mooring lines, and splice and repair ropes, wire cables and cordage",
              "<b>Objective interest</b> in <b>operating</b> deck equipment such as winches, cranes, derricks and hawsers; and in steering ships and self-propelled vessels under the direction of officers on watch",
              "<b>Methodical interest</b> in <b>comparing</b> to clean, chip and paint deck surfaces",
              "<b>Innovative interest</b> in repairing deck equipment, ropes, wire cables and cordage"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 4,
                title: "Total visual field"
              },
              colour: {
                name: "Colour Discrimination",
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 3,
                title: "Other sound discrimination"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 4,
                title: "Heavy"
              }
            }
          }
        }
      ]
    },
    {
      noc: "7533.3",
      noc_title: "Ferry Terminal Workers",
      sub_nocs: [
        {
          noc: null,
          sub_noc: "7533.3",
          sub_noc_title: "Ferry Terminal Workers",
          sub_noc_description:
            "Ferry terminal workers operate equipment required to perform work at ferry terminals.",
          example_titles: [
            "bridgemaster",
            "ferry terminal worker",
            "linesman/woman – canal lock system"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 4,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 4,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["O", "M", "d"],
            dpt: {
              data_value: 6,
              people_value: 6,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to operate equipment to perform duties at ferry terminals",
              "<b>Spatial</b> and <b>form perception</b> to adjust levels of landing bridges",
              "<b>Objective interest</b> in <b>operating</b> controls to adjust landing bridges, to position and remove gangplanks, to open and close doors and gates, and to secure and remove docking devices",
              "<b>Methodical interest</b> in <b>comparing</b> to inspect security of gangplanks, maintain equipment and clean work area",
              "<b>Directive interest</b> in <b>signalling</b> passengers and motor vehicles to embark and disembark; may collect tickets and fares from passengers"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 4,
                title: "Total visual field"
              },
              colour: {
                name: "Colour Discrimination",
                value: 0,
                title: "Not relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: 7612,
      noc_title: "Other Trades Helpers and Labourers",
      sub_nocs: [
        {
          noc: 7612,
          sub_noc: "7612",
          sub_noc_title: "Other Trades Helpers and Labourers",
          sub_noc_description:
            "Other trades helpers and labourers, not elsewhere classified, who assist skilled tradespersons and perform labouring activities in the installation, maintenance and repair of industrial machinery, refrigeration, heating and air conditioning equipment, in the maintenance and repair of transportation and heavy equipment, in the installation and repair of telecommunication and power cables and in other repair and service work settings.",
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["O", "M", "s"],
            dpt: {
              data_value: 6,
              people_value: 7,
              things_value: 4
            }
          },
          descriptor_profile: {},
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
              },
              colour: {
                name: "Colour Discrimination",
                value: 0,
                title: "Not relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: 8232,
      noc_title:
        "Oil and Gas Well Drillers, Servicers, Testers and Related Workers",
      sub_nocs: [
        {
          noc: 8232,
          sub_noc: "8232.1",
          sub_noc_title: "Oil and Gas Well Drillers and Well Servicers",
          sub_noc_description:
            "Oil and gas well drillers and well servicers control the operation of drilling and hoisting equipment on drilling and service rigs, and direct the activities of the rig crew under supervision of the rig manager.",
          example_titles: [
            "assistant driller - oil and gas well drilling",
            "directional drilling operator",
            "downhole tool operator",
            "driller – oil and gas drilling",
            "service rig operator"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 4,
              colour_value: 0,
              hearing_value: 2,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["O", "D", "m"],
            dpt: {
              data_value: 3,
              people_value: 6,
              things_value: 2
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to understand the functioning of equipment and machinery to oversee drilling and service rig operations, and to direct the activities of the rig crew under the supervision of the rig manager",
              "<b>Verbal ability</b> to train and arrange for training of crew",
              "<b>Objective interest</b> in <b>controlling</b> the operations of drilling and service rig drilling and hoisting machinery",
              "<b>Directive interest</b> in <b>speaking</b> with members of rig crew to direct them in setting up rigs, drilling and completing and servicing oil and gas exploration and producing wells",
              "<b>Methodical interest</b> in <b>compiling</b> information to maintain records of drilling and servicing operations"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 4,
                title: "Total visual field"
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
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: 8262,
      noc_title: "Fishing Vessel Skippers and Fishermen/women",
      sub_nocs: [
        {
          noc: 8262,
          sub_noc: "8262",
          sub_noc_title: "Fishermen/women",
          sub_noc_description:
            "Fishermen/women operate fishing vessels less than 100 gross tonnes to pursue and land fish and other marine life.",
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 4,
              colour_value: 1,
              hearing_value: 3,
              body_position_value: 4,
              limb_coordination_value: 2,
              strength_value: 3
            },
            interests: ["O", "D", "i"],
            dpt: {
              data_value: 1,
              people_value: 3,
              things_value: 3
            }
          },
          descriptor_profile: {},
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 4,
                title: "Total visual field"
              },
              colour: {
                name: "Colour Discrimination",
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 3,
                title: "Other sound discrimination"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 2,
                title: "Multiple limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: 8412,
      noc_title: "Oil and Gas Well Drilling Workers and Services Operators",
      sub_nocs: [
        {
          noc: 8412,
          sub_noc: "8412.1",
          sub_noc_title: "Oil and Gas Well Drilling Workers",
          sub_noc_description:
            "Oil and gas well drilling workers operate drilling and service rig machinery as intermediate members of the rig crew.",
          example_titles: [
            "blender operator - oil field services",
            "control room operator - offshore drilling",
            "derrickman/woman",
            "motorhand - oil and gas drilling",
            "pumpman/woman - oil field services",
            "rig technician - derrickhand"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["O", "M", "d"],
            dpt: {
              data_value: 3,
              people_value: 6,
              things_value: 2
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to operate drilling and service rig machinery as members of rig crews",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to align and manipulate sections of pipe and drill stems from platforms on rig derricks during removals and replacements of strings of pipe and drill stems and bits",
              "<b>Objective interest</b> in <b>controlling</b> and maintaining drilling mud systems and pumps during drilling and mixing of mud chemicals and additives; and in operating and maintaining diesel motors, transmissions and other mechanical equipment",
              "<b>Methodical interest</b> in <b>compiling</b> information to record mud flows and volumes and to take samples; and in assisting in setting up, taking down and transporting rigs",
              "<b>Directive interest</b> in <b>speaking</b> with floor hands and labourers to supervise their activities"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
              },
              colour: {
                name: "Colour Discrimination",
                value: 0,
                title: "Not relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        },
        {
          noc: 8412,
          sub_noc: "8412.2",
          sub_noc_title: "Oil and Gas Well Services Operators",
          sub_noc_description:
            "Oil and gas well services operators drive trucks and operate specialized hydraulic pumping systems to place cement in wells or to treat wells with chemicals, sand mixtures or gases to stimulate production.",
          example_titles: [
            "acidizer - oil field services",
            "oil well cementer - oil field services",
            "pumper operator - oil field services"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 4,
              colour_value: 1,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 2,
              strength_value: 3
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 5,
              people_value: 8,
              things_value: 3
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to drive well services trucks and operate specialized hydraulic pumping systems to place cement in wells and to treat wells with chemicals, sand mixtures and gases to stimulate production",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to assemble pumping equipment and to attach pumps and hoses to wellheads",
              "<b>Directive interest</b> in <b>driving</b> trucks to well sites and in operating systems to pump chemicals, gases, sand, cement and other materials into wells",
              "<b>Methodical interest</b> in monitoring pressure, density, rate and concentration during pumping operations",
              "<b>Innovative interest</b> in <b>copying</b> information to read gauges to interpret conditions and adjust pumping procedures; may mix chemicals and cement"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 4,
                title: "Total visual field"
              },
              colour: {
                name: "Colour Discrimination",
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 2,
                title: "Multiple limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: 8422,
      noc_title: "Silviculture and Forestry Workers",
      sub_nocs: [
        {
          noc: 8422,
          sub_noc: "8422",
          sub_noc_title: "Silviculture and Forestry Workers",
          sub_noc_description:
            "Silviculture and forestry workers perform a variety of duties related to reforestation and to the management, improvement and conservation of forest lands.",
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 4,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 2,
              strength_value: 4
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 5,
              people_value: 8,
              things_value: 3
            }
          },
          descriptor_profile: {},
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 4,
                title: "Total visual field"
              },
              colour: {
                name: "Colour Discrimination",
                value: 0,
                title: "Not relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 2,
                title: "Multiple limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 4,
                title: "Heavy"
              }
            }
          }
        }
      ]
    },
    {
      noc: 8431,
      noc_title: "General Farm Workers",
      sub_nocs: [
        {
          noc: 8431,
          sub_noc: "8431",
          sub_noc_title: "General Farm Workers",
          sub_noc_description:
            "General farm workers plant, cultivate and harvest crops, raise livestock and poultry and maintain and repair farm equipment and buildings. This group includes operators of farm machinery.",
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 3,
              colour_value: 1,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 2,
              strength_value: 3
            },
            interests: ["M", "O", "i"],
            dpt: {
              data_value: 6,
              people_value: 8,
              things_value: 3
            }
          },
          descriptor_profile: {},
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
              },
              colour: {
                name: "Colour Discrimination",
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 2,
                title: "Multiple limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: 8613,
      noc_title: "Aquaculture and Marine Harvest Labourers",
      sub_nocs: [
        {
          noc: 8613,
          sub_noc: "8613.1",
          sub_noc_title: "Aquaculture Support Workers",
          sub_noc_description:
            "Aquaculture support workers assist aquaculture technicians with the operations of aquatic farms.",
          example_titles: [
            "aquaculture support worker",
            "fish farm helper",
            "fish tagger",
            "fry marker",
            "sea farm attendant"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 3,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["M", "O", "i"],
            dpt: {
              data_value: 6,
              people_value: 8,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to assist aquaculture technicians in the operations of fish hatcheries and other aquatic farms and to operate boats in marine aquaculture operations",
              "<b>Finger dexterity</b> to vaccinate aquaculture stocks and to perform marking and banding techniques",
              "<b>Methodical interest</b> in <b>comparing</b> information to feed aquaculture stocks,  to perform culling techniques and to prepare stocks for market; and in keeping daily records of water flow and fish samples",
              "<b>Objective interest</b> in <b>operating</b>, maintaining and cleaning pumps, filters, tanks and other equipment; in grading and weighing aquaculture stocks; and in cleaning and maintaining aquaculture enclosures",
              "<b>Innovative interest</b> in reporting any observed irregularities in stocks"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
              },
              colour: {
                name: "Colour Discrimination",
                value: 0,
                title: "Not relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        },
        {
          noc: 8613,
          sub_noc: "8613.2",
          sub_noc_title: "Marine Plant Gatherers",
          sub_noc_description:
            "Marine plant gatherers collect marine plants for further processing.",
          example_titles: [
            "marine plant gatherer",
            "seaweed gatherer",
            "dulse gatherer"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 3,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["M", "o", "i"],
            dpt: {
              data_value: 6,
              people_value: 8,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> and <b>finger dexterity</b> to gather marine plants from beaches, rocks and shallow waters and to spread gatherings to dry",
              "<b>Methodical interest</b> in <b>comparing</b> information to spread gatherings and transport them to processing plants",
              "<b>Objective interest</b> in <b>handling</b> equipment to rake seaweed, dulse and Irish moss; and in loading plants into carts, wagons and other receptacles",
              "<b>Innovative interest</b> in removing foreign objects from gatherings"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
              },
              colour: {
                name: "Colour Discrimination",
                value: 0,
                title: "Not relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        },
        {
          noc: 8613,
          sub_noc: "8613.3",
          sub_noc_title: "Mollusk Harvesters",
          sub_noc_description:
            "Mollusk harvesters collect mollusks for sale in markets.",
          example_titles: [
            "clam digger",
            "oyster picker",
            "shellfish harvester"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 4,
              aptitudes_f: 3,
              aptitudes_m: 4
            },
            physical: {
              vision_value: 3,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["M", "o", "i"],
            dpt: {
              data_value: 6,
              people_value: 8,
              things_value: 7
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to cultivate and harvest shellfish",
              "<b>Finger dexterity</b> to gather shellfish from wild and cultivated beds by hand and using shovels, forks and rakes",
              "<b>Methodical interest</b> in <b>comparing</b> information to clean, sort and transport shellfish to markets",
              "<b>Objective interest</b> in <b>handling</b> spades, forks and other instruments to dig clams from beds; and in picking oysters",
              "<b>Innovative interest</b> in selling catches to public at docks and in markets"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
              },
              colour: {
                name: "Colour Discrimination",
                value: 0,
                title: "Not relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: 9412,
      noc_title: "Foundry Workers",
      sub_nocs: [
        {
          noc: 9412,
          sub_noc: "9412.3",
          sub_noc_title: "Machine Mouldmakers and Coremakers",
          sub_noc_description:
            "Machine mouldmakers and coremakers operate machines to make foundry moulds and cores.",
          example_titles: ["ceramic mouldmaker", "machine coremaker"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 6,
              people_value: 8,
              things_value: 2
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to set up, adjust and operate mouldmaking and coremaking machines to make sand and ceramic moulds and cores",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to use hand tools and measuring instruments to prepare and measure moulds and cores",
              "<b>Objective interest</b> in <b>controlling</b> mouldmaking and coremaking machinery",
              "<b>Methodical interest</b> in <b>comparing</b> products with drawings and specifications to ensure that they conform to standards",
              "<b>Innovative interest</b> in attaining set limits, tolerances and standards"
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        },
        {
          noc: 9412,
          sub_noc: "9412.4",
          sub_noc_title: "Metal Casters",
          sub_noc_description:
            "Metal casters operate machines to cast molten metal for use in foundries.",
          example_titles: [
            "casting machine operator",
            "die-casting machine operator",
            "metal caster"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 0,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 6,
              people_value: 8,
              things_value: 2
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to set up, adjust and operate machines to cast ferrous and non-ferrous metal products",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to hand ladle and pour molten metal into moulds to produce castings",
              "<b>Objective interest</b> in <b>controlling</b> the flow of molten metals to moulds and the flow of water and air to cooling systems; and in operating machines to cast ferrous and non-ferrous metal products",
              "<b>Methodical interest</b> in <b>comparing</b> products with drawings and specifications to ensure that they conform to standards",
              "<b>Innovative interest</b> in examining castings for defects and in attaining set limits, tolerances and standards"
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
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        },
        {
          noc: 9412,
          sub_noc: "9412.5",
          sub_noc_title: "Foundry Furnace Operators",
          sub_noc_description:
            "Foundry furnace operators run furnaces to melt and cast metals in foundries.",
          example_titles: [
            "foundry worker",
            "furnace operator – foundry",
            "melter – foundry"
          ],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 4,
              aptitudes_v: 4,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 2,
              colour_value: 1,
              hearing_value: 1,
              body_position_value: 4,
              limb_coordination_value: 1,
              strength_value: 3
            },
            interests: ["O", "M", "i"],
            dpt: {
              data_value: 6,
              people_value: 8,
              things_value: 2
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to understand the characteristics of molten metals and to operate furnaces",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to set furnace controls and use hand tools and measuring instruments",
              "<b>Objective interest</b> in <b>controlling</b> the injection of fuels and air into furnaces and the flow of electricity and coolants in order to operate furnaces",
              "<b>Methodical interest</b> in <b>comparing</b> test data from melts to ensure that products conform to standards",
              "<b>Innovative interest</b> in observing colour of molten metals and instrument readings in order to adjust controls, and in attaining set specifications"
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
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 1,
                title: "Limited"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 1,
                title: "Upper limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 3,
                title: "Medium"
              }
            }
          }
        }
      ]
    },
    {
      noc: 2225,
      noc_title: "Landscape and Horticultural Technicians and Specialists",
      sub_nocs: [
        {
          noc: 2225,
          sub_noc: "2225.7",
          sub_noc_title: "Lawn Care Specialists",
          sub_noc_description:
            "Lawn care specialists apply products to customers' lawns and promote lawn care services.",
          example_titles: ["lawn care specialist"],
          profile_summary: {
            aptitudes: {
              aptitudes_g: 3,
              aptitudes_v: 3,
              aptitudes_n: 4,
              aptitudes_s: 4,
              aptitudes_p: 4,
              aptitudes_q: 4,
              aptitudes_k: 3,
              aptitudes_f: 4,
              aptitudes_m: 3
            },
            physical: {
              vision_value: 3,
              colour_value: 1,
              hearing_value: 2,
              body_position_value: 4,
              limb_coordination_value: 2,
              strength_value: 4
            },
            interests: ["O", "M", "D"],
            dpt: {
              data_value: 5,
              people_value: 6,
              things_value: 4
            }
          },
          descriptor_profile: {
            main_characteristics: [
              "<b>General learning ability</b> to assess the health of lawns and determine required lawn applications; may specialize and care for trees and shrubs",
              "<b>Verbal ability</b> to review route packages and read customers' service agreements",
              "<b>Motor co-ordination</b> and <b>manual dexterity</b> to use broadcast spreaders, pressurized hoses from truck-mounted tanks and hand and backpack spraying equipment",
              "<b>Objective interest</b> in <b>operating</b> equipment to apply fertilizer, pesticides and other lawn care products",
              "<b>Methodical interest</b> in <b>copying</b> information to complete billing invoices and update service agreements",
              "<b>Directive interest</b> in <b>speaking</b> with home-owners and business clients to describe the purpose of service calls, to provide tips concerning mowing and watering practices, weed and insect control and other cultural practices; and to call on home-owners to solicit service agreements"
            ]
          },
          physical_activities: {
            physical: {
              vision: {
                name: "Vision",
                value: 3,
                title: "Near and far vision"
              },
              colour: {
                name: "Colour Discrimination",
                value: 1,
                title: "Relevant"
              },
              hearing: {
                name: "Hearing",
                value: 2,
                title: "Verbal interaction"
              },
              body_position: {
                name: "Body Position",
                value: 4,
                title: "Other body positions"
              },
              limb_coordination: {
                name: "Limb Co-ordination",
                value: 2,
                title: "Multiple limb co-ordination"
              },
              strength: {
                name: "Strength",
                value: 4,
                title: "Heavy"
              }
            }
          }
        }
      ]
    }
  ];

  componentDidMount() {
    this.setState({ results: this.props.results });
  }

  render() {
    return (
      <div style={this.props.styling}>
        {this.state.results ? (
          this.state.results.map(noc => {
            return <NocResult noc={noc} onClick={this.props.onClick} />;
          })
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }
}
