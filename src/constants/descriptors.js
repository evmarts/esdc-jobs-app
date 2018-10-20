const aptitudes = {
  full: "Aptitudes",
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
      full: "Numerical Ability",
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
  full: "Interests",
  total: 3,
  values: {
    "1": {
      full: "First Descriptive Factor",
      options: ["D", "I", "M", "O", "S", "d", "i", "m", "o", "s"]
    },
    "2": {
      full: "Second Descriptive Factor",
      options: ["D", "I", "M", "O", "S", "d", "i", "m", "o", "s"]
    },
    "3": {
      full: "Third Descriptive Factor",
      options: ["D", "I", "M", "O", "S", "d", "i", "m", "o", "s"]
    }
  }
};

const dpt = {
  full: "Data/Information, People, Things",
  total: 3,
  values: {
    D: {
      full: "Data/Information",
      options: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    P: {
      full: "People",
      options: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    T: {
      full: "Things",
      options: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  }
};

const physicalActivities = {
  full: "Physical Activities",
  total: 6,
  values: {
    V: {
      full: "Vision",
      options: [1, 2, 3, 4]
    },
    C: {
      full: "Colour Discrimination",
      options: [0, 1]
    },
    H: {
      full: "Hearing",
      options: [1, 2, 3]
    },
    B: {
      full: "Body Position",
      options: [1, 2, 3, 4]
    },
    L: {
      full: "Limb Co-ordination",
      options: [0, 1, 2]
    },
    S: {
      full: "Strength",
      options: [1, 2, 3, 4]
    }
  }
};

const environmentalConditions = {
  full: "Environmental Conditions",
  total: 3,
  values: {
    L: {
      full: "Location",
      options: [1, 2, 3, 4]
    }, 
    H: {
      full: "Hazards",
      options: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    D: {
      full: "Discomforts",
      options: [1, 2, 3, 4, 5]
    }
  }
};

const employmentRequirements = {
  full: "Employment Requirements",
  total: 1,
  values: {
    E: {
      full: "Education/Training Indicators",
      options: [1, 2, 3, 4, 5, 6, 7, 8, "+", "R"]
    }
  }
};

const descriptors = {
    aptitudes,
    interests,
    dpt,
    physicalActivities,
    environmentalConditions,
    employmentRequirements
  };

module.exports = {
  descriptors
};
