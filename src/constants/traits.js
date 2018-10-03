const aptitudes = {
  total: 9,
  values: {
    G: {
      full: "General Learning Ability",
      options: [1, 2, 3, 4, 5]
    },
    V: {
      full: "Verbal Ability",
      options: [1, 2, 3, 4, 5]
    },
    N: {
      full: "Numerica Ability",
      options: [1, 2, 3, 4, 5]
    },
    S: {
      full: "Spatial Ability",
      options: [1, 2, 3, 4, 5]
    },
    P: {
      full: "Form Perception",
      options: [1, 2, 3, 4, 5]
    },
    Q: {
      full: "Clerical Perception",
      options: [1, 2, 3, 4, 5]
    },
    K: {
      full: "Motor Co-ordination",
      options: [1, 2, 3, 4, 5]
    },
    F: {
      full: "Finger Dexterity",
      options: [1, 2, 3, 4, 5]
    },
    M: {
      full: "Manual Dexterity",
      options: [1, 2, 3, 4, 5]
    }
  }
};

const interests = {
  total: 3,
  values: {
    firstChoice: {
      full: "First Descriptive Factor",
      options: ["D", "I", "M", "O", "S", "d", "i", "m", "o", "s"]
    },
    secondChoice: {
      full: "Second Descriptive Factor",
      options: ["D", "I", "M", "O", "S", "d", "i", "m", "o", "s"]
    },
    thirdChoice: {
      full: "Third Descriptive Factor",
      options: ["D", "I", "M", "O", "S", "d", "i", "m", "o", "s"]
    }
  }
};

const dpt = {
  total: 3,
  values: {
    data: {
      full: "Data/Information",
      options: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    people: {
      full: "People",
      options: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    things: {
      full: "Things",
      options: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  }
};

const physicalActivities = {
  total: 6,
  values: {
    vision: {
      full: "Vision",
      option: [1, 2, 3, 4]
    },
    colourDiscrimination: {
      full: "Colour Discrimination",
      option: [0, 1]
    },
    hearing: {
      full: "Hearing",
      option: [1, 2, 3]
    },
    bodyPosition: {
      full: "Body Position",
      option: [1, 2, 3, 4]
    },
    limbCoordination: {
      full: "Limb Co-ordination",
      option: [0, 1, 2]
    },
    strength: {
      full: "Strength",
      option: [1, 2, 3, 4]
    }
  }
};

const environmentalConditions = {
  total: 3,
  values: {
    location: {
      full: "Location",
      options: [1, 2, 3, 4]
    },
    hazards: {
      full: "Hazards",
      options: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    discomforts: {
      full: "Discomforts",
      options: [1, 2, 3, 4, 5]
    }
  }
};

const employmentRequirements = {
  total: 1,
  values: {
    education: {
      full: "Education/Training Indicators",
      options: [1, 2, 3, 4, 5, 6, 7, 8, "+", "R"]
    }
  }
};

const traits = {
    aptitudes,
    interests,
    dpt,
    physicalActivities,
    environmentalConditions,
    employmentRequirements
  };

module.exports = {
  traits
};
