import React from "react";
import Result from "./Result";

export default class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  result = [
    {
      sub_noc: "6562.4",
      sub_noc_title: "Manicurists and Pedicurists",
      sub_noc_description:
        "Manicurists and pedicurists provide treatment to hands and feet to enhance their clients' physical appearance.",
      example_titles: ["manicurist", "pedicurist"],
      profile_summary: {
        aptitudes: {
          aptitudes_g: 4,
          aptitudes_v: 4,
          aptitudes_n: 5,
          aptitudes_s: 4,
          aptitudes_p: 3,
          aptitudes_q: 5,
          aptitudes_k: 3,
          aptitudes_f: 3,
          aptitudes_m: 3
        },
        physical: {
          vision_value: 2,
          colour_value: 1,
          hearing_value: 2,
          body_position_value: 1,
          limb_coordination_value: 1,
          strength_value: 1
        },
        environment: "L1",
        interests: ["M", "S", "O"],
        dpt: {
          data_value: 6,
          people_value: 7,
          things_value: 4
        },
        et_value: "3"
      },
      descriptor_profile: {
        main_characteristics: [
          "<b>General learning ability</b> to acquire and apply manicuring and pedicuring techniques",
          "<b>Form perception</b> to determine nail and cuticle condition",
          "<b>Motor co-ordination</b> to shape and smooth ends of fingernails and toenails",
          "<b>Finger dexterity</b> to use cuticle knives, scissors, files, emery boards and nail polish brushes",
          "<b>Manual dexterity</b> to clean and polish fingernails and toenails",
          "<b>Methodical interest</b> in <b>comparing</b> to clean, shape and polish fingernails and toenails and provide related treatments",
          "<b>Social interest</b> in <b>serving – assisting</b> clients by providing treatments to hands and feet designed to enhance physical appearance",
          "<b>Objective interest</b> in <b>manipulating</b> and applying various specialized products"
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
      workplace_and_employers: "Beauty salons"
    },
    {
      sub_noc: "6562.4",
      sub_noc_title: "Manicurists and Pedicurists",
      sub_noc_description:
        "Manicurists and pedicurists provide treatment to hands and feet to enhance their clients' physical appearance.",
      example_titles: ["manicurist", "pedicurist"],
      profile_summary: {
        aptitudes: {
          aptitudes_g: 4,
          aptitudes_v: 4,
          aptitudes_n: 5,
          aptitudes_s: 4,
          aptitudes_p: 3,
          aptitudes_q: 5,
          aptitudes_k: 3,
          aptitudes_f: 3,
          aptitudes_m: 3
        },
        physical: {
          vision_value: 2,
          colour_value: 1,
          hearing_value: 2,
          body_position_value: 1,
          limb_coordination_value: 1,
          strength_value: 1
        },
        environment: "L1",
        interests: ["M", "S", "O"],
        dpt: {
          data_value: 6,
          people_value: 7,
          things_value: 4
        },
        et_value: "4"
      },
      descriptor_profile: {
        main_characteristics: [
          "<b>General learning ability</b> to acquire and apply manicuring and pedicuring techniques",
          "<b>Form perception</b> to determine nail and cuticle condition",
          "<b>Motor co-ordination</b> to shape and smooth ends of fingernails and toenails",
          "<b>Finger dexterity</b> to use cuticle knives, scissors, files, emery boards and nail polish brushes",
          "<b>Manual dexterity</b> to clean and polish fingernails and toenails",
          "<b>Methodical interest</b> in <b>comparing</b> to clean, shape and polish fingernails and toenails and provide related treatments",
          "<b>Social interest</b> in <b>serving – assisting</b> clients by providing treatments to hands and feet designed to enhance physical appearance",
          "<b>Objective interest</b> in <b>manipulating</b> and applying various specialized products"
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
        et_value: "4"
      },
      workplace_and_employers: "Beauty salons"
    },
    {
      sub_noc: "9446",
      sub_noc_title: "Industrial Sewing Machine Operators",
      sub_noc_description:
        "Industrial sewing machine operators operate sewing machines to sew fabric, fur, leather or synthetic materials to produce or repair garments and other articles.",
      example_titles: [
        "sewing machine operator",
        "lining stitcher",
        "shoe sewer",
        "serging machine operator",
        "sample sewer",
        "fur sewing machine operator",
        "leather products sewing machine operator"
      ],
      profile_summary: {
        aptitudes: {
          aptitudes_g: 4,
          aptitudes_v: 4,
          aptitudes_n: 4,
          aptitudes_s: 3,
          aptitudes_p: 3,
          aptitudes_q: 5,
          aptitudes_k: 3,
          aptitudes_f: 3,
          aptitudes_m: 3
        },
        physical: {
          vision_value: 1,
          colour_value: 1,
          hearing_value: 1,
          body_position_value: 1,
          limb_coordination_value: 2,
          strength_value: 2
        },
        environment: "L1",
        interests: ["O", "M", "i"],
        dpt: {
          data_value: 6,
          people_value: 8,
          things_value: 4
        },
        et_value: "2"
      },
      descriptor_profile: {
        main_characteristics: [
          "<b>General learning ability</b> to operate sewing machines to join sections of garments and other articles into finished products on a piecework or production basis",
          "<b>Spatial perception</b> to position articles and materials in machines",
          "<b>Form perception</b> to examine finished products for defects, and to assemble pieces of garments by matching patterns and dye lots",
          "<b>Motor co-ordination</b> and <b>finger</b> and <b>manual dexterity</b> to thread and operate a variety of sewing machines; may perform minor maintenance and repairs on sewing machines",
          "<b>Objective interest</b> in <b>operating</b> single, double and multi-needle, serging, flat bed felling, banding and other sewing machines to sew and overcast edges of materials simultaneously, and to sew leather parts together for garments, handbags, shoes and other articles",
          "<b>Methodical interest</b> in <b>comparing</b> to select threads according to specifications and colours of fabrics, and to operate fur sewing machines to join pelt strips to required sizes and shapes and to join pelts into garment sections and shells; and in completing production reports",
          "<b>Innovative interest</b> in operating tackers, pocketsetters, buttonhole makers and fusing, hemmer and other machines to finish garments and other articles, and in using sewing machines, sergers and other machines to repair garments and other articles during manufacturing"
        ]
      },
      physical_activities: {
        physical: {
          vision: {
            name: "Vision",
            value: 1,
            title: "Close visual acuity"
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
            value: 2,
            title: "Multiple limb co-ordination"
          },
          strength: {
            name: "Strength",
            value: 2,
            title: "Light"
          }
        },
        environment: {
          value: "L1",
          title: "Regulated inside climate"
        }
      },
      employment_requirements: {
        et_value: "2"
      },
      workplace_and_employers: "Footwear manufacturing companies"
    },
    {
      sub_noc: "9446",
      sub_noc_title: "Industrial Sewing Machine Operators",
      sub_noc_description:
        "Industrial sewing machine operators operate sewing machines to sew fabric, fur, leather or synthetic materials to produce or repair garments and other articles.",
      example_titles: [
        "sewing machine operator",
        "lining stitcher",
        "shoe sewer",
        "serging machine operator",
        "sample sewer",
        "fur sewing machine operator",
        "leather products sewing machine operator"
      ],
      profile_summary: {
        aptitudes: {
          aptitudes_g: 4,
          aptitudes_v: 4,
          aptitudes_n: 4,
          aptitudes_s: 3,
          aptitudes_p: 3,
          aptitudes_q: 5,
          aptitudes_k: 3,
          aptitudes_f: 3,
          aptitudes_m: 3
        },
        physical: {
          vision_value: 1,
          colour_value: 1,
          hearing_value: 1,
          body_position_value: 1,
          limb_coordination_value: 2,
          strength_value: 2
        },
        environment: "L1",
        interests: ["O", "M", "i"],
        dpt: {
          data_value: 6,
          people_value: 8,
          things_value: 4
        },
        et_value: "2"
      },
      descriptor_profile: {
        main_characteristics: [
          "<b>General learning ability</b> to operate sewing machines to join sections of garments and other articles into finished products on a piecework or production basis",
          "<b>Spatial perception</b> to position articles and materials in machines",
          "<b>Form perception</b> to examine finished products for defects, and to assemble pieces of garments by matching patterns and dye lots",
          "<b>Motor co-ordination</b> and <b>finger</b> and <b>manual dexterity</b> to thread and operate a variety of sewing machines; may perform minor maintenance and repairs on sewing machines",
          "<b>Objective interest</b> in <b>operating</b> single, double and multi-needle, serging, flat bed felling, banding and other sewing machines to sew and overcast edges of materials simultaneously, and to sew leather parts together for garments, handbags, shoes and other articles",
          "<b>Methodical interest</b> in <b>comparing</b> to select threads according to specifications and colours of fabrics, and to operate fur sewing machines to join pelt strips to required sizes and shapes and to join pelts into garment sections and shells; and in completing production reports",
          "<b>Innovative interest</b> in operating tackers, pocketsetters, buttonhole makers and fusing, hemmer and other machines to finish garments and other articles, and in using sewing machines, sergers and other machines to repair garments and other articles during manufacturing"
        ]
      },
      physical_activities: {
        physical: {
          vision: {
            name: "Vision",
            value: 1,
            title: "Close visual acuity"
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
            value: 2,
            title: "Multiple limb co-ordination"
          },
          strength: {
            name: "Strength",
            value: 2,
            title: "Light"
          }
        },
        environment: {
          value: "L1",
          title: "Regulated inside climate"
        }
      },
      employment_requirements: {
        et_value: "2"
      },
      workplace_and_employers: "Clothing manufacturing companies"
    }
  ];

  render() {
    return (
      <div style={this.props.styling}>
        <h2>Results:</h2>
        {this.result.map(r => {
          return <Result result={r} onClick={this.props.onClick} />;
        })}
      </div>
    );
  }
}
