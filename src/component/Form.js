import React from "react";
import FetchJobs from "./FetchJobs";

class Form extends React.Component {
  state = {
    aptitudesMin: [],
    aptitudesMax: [],
    interests: [],
    dptMin: [],
    dptMax: [],
    physicalActivitesMin: [],
    physicalActivitesMax: [],
    environmentalConditionsMin: [],
    environmentalConditionsMax: [],
    employmentRequirementsMin: [],
    employmentRequirementsMax: []
  };

  change = e => {
    const value = e.target.value;
    if (e.target.name.includes("ap") && e.target.name.includes("_lb")) {
      this.setState(prevState => ({
        aptitudesMin: [...prevState.aptitudesMin, value]
      }));
    }
    if (e.target.name.includes("ap") && e.target.name.includes("_ub")) {
      this.setState(prevState => ({
        aptitudesMax: [...prevState.aptitudesMax, value]
      }));
    }
    if (e.target.name.includes("dpt") && e.target.name.includes("_lb")) {
      this.setState(prevState => ({
        dptMin: [...prevState.dptMin, value]
      }));
    }
    if (e.target.name.includes("dpt") && e.target.name.includes("_ub")) {
      this.setState(prevState => ({
        dptMax: [...prevState.dptMax, value]
      }));
    }
    if (e.target.name.includes("ph") && e.target.name.includes("_lb")) {
      this.setState(prevState => ({
        physicalActivitesMin: [...prevState.physicalActivitesMin, value]
      }));
    }
    if (e.target.name.includes("ph") && e.target.name.includes("_ub")) {
      this.setState(prevState => ({
        physicalActivitesMax: [...prevState.physicalActivitesMax, value]
      }));
    }
    if (e.target.name.includes("ec") && e.target.name.includes("_lb")) {
      this.setState(prevState => ({
        environmentalConditionsMin: [
          ...prevState.environmentalConditionsMin,
          value
        ]
      }));
    }
    if (e.target.name.includes("ec") && e.target.name.includes("_ub")) {
      this.setState(prevState => ({
        environmentalConditionsMax: [
          ...prevState.environmentalConditionsMax,
          value
        ]
      }));
    }
    if (e.target.name.includes("et") && e.target.name.includes("_lb")) {
      this.setState(prevState => ({
        employmentRequirementsMin: [
          ...prevState.employmentRequirementsMin,
          value
        ]
      }));
    }
    if (e.target.name.includes("et") && e.target.name.includes("_ub")) {
      this.setState(prevState => ({
        employmentRequirementsMax: [
          ...prevState.employmentRequirementsMax,
          value
        ]
      }));
    }
    if (e.target.name.includes("in")) {
      this.setState(prevState => ({
        interests: [
          ...prevState.interests,
          value
        ]
      }));
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      aptitudesMin: [],
      aptitudesMax: [],
      interests: [],
      dptMin: [],
      dptMax: [],
      physicalActivitesMin: [],
      physicalActivitesMax: [],
      environmentalConditionsMin: [],
      environmentalConditionsMax: [],
      employmentRequirementsMin: [],
      employmentRequirementsMax: []
    });
  };

  render() {
    return (
      <form align="center">
        <h3>Aptitudes</h3>
        <label>G</label>
        <select name="apG_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="G1">1</option>
          <option value="G2">2</option>
          <option value="G3">3</option>
          <option value="G4">4</option>
        </select>
        <label>–</label>
        <select name="apG_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="G1">1</option>
          <option value="G2">2</option>
          <option value="G3">3</option>
          <option value="G4">4</option>
        </select>

        <br />

        <label>V</label>
        <select name="apV_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="V1">1</option>
          <option value="V2">2</option>
          <option value="V3">3</option>
          <option value="V4">4</option>
        </select>
        <label>–</label>
        <select name="apV_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="V1">1</option>
          <option value="V2">2</option>
          <option value="V3">3</option>
          <option value="V4">4</option>
        </select>

        <br />

        <label>N</label>
        <select name="apN_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="N1">1</option>
          <option value="N2">2</option>
          <option value="N3">3</option>
          <option value="N4">4</option>
        </select>
        <label>–</label>
        <select name="apN_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="N1">1</option>
          <option value="N2">2</option>
          <option value="N3">3</option>
          <option value="N4">4</option>
        </select>

        <br />

        <label>S</label>
        <select name="apS_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="S1">1</option>
          <option value="S2">2</option>
          <option value="S3">3</option>
          <option value="S4">4</option>
        </select>
        <label>–</label>
        <select name="apS_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="S1">1</option>
          <option value="S2">2</option>
          <option value="S3">3</option>
          <option value="S4">4</option>
        </select>

        <br />

        <label>P</label>
        <select name="apP_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="P1">1</option>
          <option value="P2">2</option>
          <option value="P3">3</option>
          <option value="P4">4</option>
        </select>
        <label>–</label>
        <select name="apP_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="P1">1</option>
          <option value="P2">2</option>
          <option value="P3">3</option>
          <option value="P4">4</option>
        </select>

        <br />

        <label>Q</label>
        <select name="apQ_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="Q1">1</option>
          <option value="Q2">2</option>
          <option value="Q3">3</option>
          <option value="Q4">4</option>
        </select>
        <label>–</label>
        <select name="apQ_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="Q1">1</option>
          <option value="Q2">2</option>
          <option value="Q3">3</option>
          <option value="Q4">4</option>
        </select>

        <br />

        <label>K</label>
        <select name="apK_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="K1">1</option>
          <option value="K2">2</option>
          <option value="K3">3</option>
          <option value="K4">4</option>
        </select>
        <label>–</label>
        <select name="apK_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="K1">1</option>
          <option value="K2">2</option>
          <option value="K3">3</option>
          <option value="K4">4</option>
        </select>

        <br />

        <label>F</label>
        <select name="apF_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="F1">1</option>
          <option value="F2">2</option>
          <option value="F3">3</option>
          <option value="F4">4</option>
        </select>
        <label>–</label>
        <select name="apF_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="F1">1</option>
          <option value="F2">2</option>
          <option value="F3">3</option>
          <option value="F4">4</option>
        </select>

        <br />

        <label>M</label>
        <select name="apM_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="M1">1</option>
          <option value="M2">2</option>
          <option value="M3">3</option>
          <option value="M4">4</option>
        </select>
        <label>–</label>
        <select name="apM_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="M1">1</option>
          <option value="M2">2</option>
          <option value="M3">3</option>
          <option value="M4">4</option>
        </select>
        <br />

        <h3>Interests</h3>
        <label>🥇</label>
        <select name="in1" onChange={e => this.change(e)}>
          <option value="" />
          <option value="D">D</option>
          <option value="I">I</option>
          <option value="M">M</option>
          <option value="O">O</option>
          <option value="S">S</option>
          <option value="d">d</option>
          <option value="i">i</option>
          <option value="m">m</option>
          <option value="o">o</option>
          <option value="s">s</option>
        </select>
        <br />
        <label>🥈</label>
        <select name="in2" onChange={e => this.change(e)}>
          <option value="" />
          <option value="D">D</option>
          <option value="I">I</option>
          <option value="M">M</option>
          <option value="O">O</option>
          <option value="S">S</option>
          <option value="d">d</option>
          <option value="i">i</option>
          <option value="m">m</option>
          <option value="o">o</option>
          <option value="s">s</option>
        </select>
        <br />
        <label>🥉</label>
        <select name="in3" onChange={e => this.change(e)}>
          <option value="" />
          <option value="D">D</option>
          <option value="I">I</option>
          <option value="M">M</option>
          <option value="O">O</option>
          <option value="S">S</option>
          <option value="d">d</option>
          <option value="i">i</option>
          <option value="m">m</option>
          <option value="o">o</option>
          <option value="s">s</option>
        </select>
        <br />

        <h3>Data/Information, People, Things</h3>

        <label>D</label>
        <select name="dptD_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="D1">1</option>
          <option value="D2">2</option>
          <option value="D3">3</option>
          <option value="D4">4</option>
          <option value="D5">5</option>
          <option value="D6">6</option>
          <option value="D7">7</option>
          <option value="D8">8</option>
        </select>
        <label>–</label>
        <select name="dptD_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="D1">1</option>
          <option value="D2">2</option>
          <option value="D3">3</option>
          <option value="D4">4</option>
          <option value="D5">5</option>
          <option value="D6">6</option>
          <option value="D7">7</option>
          <option value="D8">8</option>
        </select>

        <br />

        <label>P</label>
        <select name="dptP_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="P1">1</option>
          <option value="P2">2</option>
          <option value="P3">3</option>
          <option value="P4">4</option>
          <option value="P5">5</option>
          <option value="P6">6</option>
          <option value="P7">7</option>
          <option value="P8">8</option>
        </select>
        <label>–</label>
        <select name="dptP_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="P1">1</option>
          <option value="P2">2</option>
          <option value="P3">3</option>
          <option value="P4">4</option>
          <option value="P5">5</option>
          <option value="P6">6</option>
          <option value="P7">7</option>
          <option value="P8">8</option>
        </select>

        <br />
        <label>T</label>
        <select name="dptT_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="T1">1</option>
          <option value="T2">2</option>
          <option value="T3">3</option>
          <option value="T4">4</option>
          <option value="T5">5</option>
          <option value="T6">6</option>
          <option value="T7">7</option>
          <option value="T8">8</option>
        </select>
        <label>–</label>
        <select name="dptT_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="T1">1</option>
          <option value="T2">2</option>
          <option value="T3">3</option>
          <option value="T4">4</option>
          <option value="T5">5</option>
          <option value="T6">6</option>
          <option value="T7">7</option>
          <option value="T8">8</option>
        </select>

        <br />

        <h3>Physical Activities 💪</h3>
        <label>V</label>
        <select name="phV_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="V1">1</option>
          <option value="V2">2</option>
          <option value="V3">3</option>
          <option value="V4">4</option>
        </select>
        <label>–</label>
        <select name="phV_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="V1">1</option>
          <option value="V2">2</option>
          <option value="V3">3</option>
          <option value="V4">4</option>
        </select>

        <br />

        <label>C</label>
        <select name="phC_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="C0">0</option>
          <option value="C1">1</option>
        </select>
        <label>–</label>
        <select name="phC_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="C0">0</option>
          <option value="C1">1</option>
        </select>

        <br />

        <label>H</label>
        <select name="phH_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="H1">1</option>
          <option value="H2">2</option>
          <option value="H3">3</option>
        </select>
        <label>–</label>
        <select name="phH_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="H1">1</option>
          <option value="H2">2</option>
          <option value="H3">3</option>
        </select>

        <br />

        <label>B</label>
        <select name="phB_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="B1">1</option>
          <option value="B2">2</option>
          <option value="B3">3</option>
          <option value="B4">4</option>
        </select>
        <label>–</label>
        <select name="phB_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="B1">1</option>
          <option value="B2">2</option>
          <option value="B3">3</option>
          <option value="B4">4</option>
        </select>

        <br />

        <label>L</label>
        <select name="phL_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="L0">0</option>
          <option value="L1">1</option>
          <option value="L2">2</option>
        </select>
        <label>–</label>
        <select name="phL_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="L0">0</option>
          <option value="L1">1</option>
          <option value="L2">2</option>
        </select>

        <br />

        <label>S</label>
        <select name="phS_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="S1">1</option>
          <option value="S2">2</option>
          <option value="S3">3</option>
          <option value="S4">4</option>
        </select>
        <label>–</label>
        <select name="phS_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="S1">1</option>
          <option value="S2">2</option>
          <option value="S3">3</option>
          <option value="S4">4</option>
        </select>

        <br />

        <h3>Environmental Conditions 🏢 🌳 🚖</h3>
        <label>L</label>
        <select name="ecL_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="L1">1</option>
          <option value="L2">2</option>
          <option value="L3">3</option>
          <option value="L4">4</option>
        </select>
        <label>–</label>
        <select name="ecL_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="L1">1</option>
          <option value="L2">2</option>
          <option value="L3">3</option>
          <option value="L4">4</option>
        </select>

        <br />

        <label>H</label>
        <select name="ecH_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="H1">0</option>
          <option value="H2">1</option>
          <option value="H3">3</option>
          <option value="H4">4</option>
          <option value="H5">5</option>
          <option value="H6">6</option>
          <option value="H7">7</option>
          <option value="H8">8</option>
        </select>
        <label>–</label>
        <select name="ecH_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="H1">0</option>
          <option value="H2">1</option>
          <option value="H3">3</option>
          <option value="H4">4</option>
          <option value="H5">5</option>
          <option value="H6">6</option>
          <option value="H7">7</option>
          <option value="H8">8</option>
        </select>

        <br />

        <label>D</label>
        <select name="ecD_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="D1">1</option>
          <option value="D2">2</option>
          <option value="D3">3</option>
          <option value="D4">4</option>
          <option value="D5">5</option>
        </select>
        <label>–</label>
        <select name="ecD_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="D1">1</option>
          <option value="D2">2</option>
          <option value="D3">3</option>
          <option value="D4">4</option>
          <option value="D5">5</option>
        </select>
        <br />

        <h3>Employment Requirements 🎓</h3>
        <select name="et_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="+">+</option>
          <option value="R">R</option>
        </select>
        <label>–</label>
        <select name="et_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="+">+</option>
          <option value="R">R</option>
        </select>
        <br />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default Form;
