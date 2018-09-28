import React from "react";

class Form extends React.Component {
  state = {
    apG_lb: "",
    apG_ub: "",
    apV_lb: "",
    apV_ub: "",
    apN_lb: "",
    apN_ub: "",
    apS_lb: "",
    apS_ub: "",
    apP_lb: "",
    apP_ub: "",
    apQ_lb: "",
    apQ_ub: "",
    apK_lb: "",
    apK_ub: "",
    apF_lb: "",
    apF_ub: "",
    apM_lb: "",
    apM_ub: "",
    in1: "",
    in2: "",
    in3: "",
    dptD_lb: "",
    dptD_ub: "",
    dptP_lb: "",
    dptP_ub: "",
    dptT_lb: "",
    dptT_ub: "",
    phV_lb: "",
    phV_ub: "",
    phC_lb: "",
    phC_ub: "",
    phH_lb: "",
    phH_ub: "",
    phB_lb: "",
    phB_ub: "",
    phL_lb: "",
    phL_ub: "",
    phS_lb: "",
    phS_ub: "",
    ecL_lb: "",
    ecL_ub: "",
    ecH_lb: "",
    ecH_ub: "",
    ecD_lb: "",
    ecD_ub: "",
    et_lb: "",
    et_ub: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      apG_lb: "",
      apG_ub: "",
      apV_lb: "",
      apV_ub: "",
      apN_lb: "",
      apN_ub: "",
      apS_lb: "",
      apS_ub: "",
      apP_lb: "",
      apP_ub: "",
      apQ_lb: "",
      apQ_ub: "",
      apK_lb: "",
      apK_ub: "",
      apF_lb: "",
      apF_ub: "",
      apM_lb: "",
      apM_ub: "",
      in1: "",
      in2: "",
      in3: "",
      dptD_lb: "",
      dptD_ub: "",
      dptP_lb: "",
      dptP_ub: "",
      dptT_lb: "",
      dptT_ub: "",
      phV_lb: "",
      phV_ub: "",
      phC_lb: "",
      phC_ub: "",
      phH_lb: "",
      phH_ub: "",
      phB_lb: "",
      phB_ub: "",
      phL_lb: "",
      phL_ub: "",
      phS_lb: "",
      phS_ub: "",
      ecL_lb: "",
      ecL_ub: "",
      ecH_lb: "",
      ecH_ub: "",
      ecD_lb: "",
      ecD_ub: "",
      et_lb: "",
      et_ub: ""
    });
  };

  render() {
    return (
      <form align="center">
        <h3>Aptitudes</h3>
        <label>G</label>
        <select name="apG_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="G1_lb">1</option>
          <option value="G2_lb">2</option>
          <option value="G3_lb">3</option>
          <option value="G3_lb">4</option>
        </select>
        <label>–</label>
        <select name="apG_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="G1_ub">1</option>
          <option value="G2_ub">2</option>
          <option value="G3_ub">3</option>
          <option value="G3_ub">4</option>
        </select>

        <br />

        <label>V</label>
        <select name="apV_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="V1_lb">1</option>
          <option value="V2_lb">2</option>
          <option value="V3_lb">3</option>
          <option value="V3_lb">4</option>
        </select>
        <label>–</label>
        <select name="apV_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="V1_ub">1</option>
          <option value="V2_ub">2</option>
          <option value="V3_ub">3</option>
          <option value="V3_ub">4</option>
        </select>

        <br />

        <label>N</label>
        <select name="apN_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="N1_lb">1</option>
          <option value="N2_lb">2</option>
          <option value="N3_lb">3</option>
          <option value="N3_lb">4</option>
        </select>
        <label>–</label>
        <select name="apN_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="N1_ub">1</option>
          <option value="N2_ub">2</option>
          <option value="N3_ub">3</option>
          <option value="N3_ub">4</option>
        </select>

        <br />

        <label>S</label>
        <select name="apS_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="S1_lb">1</option>
          <option value="S2_lb">2</option>
          <option value="S3_lb">3</option>
          <option value="S3_lb">4</option>
        </select>
        <label>–</label>
        <select name="apS_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="S1_ub">1</option>
          <option value="S2_ub">2</option>
          <option value="S3_ub">3</option>
          <option value="S3_ub">4</option>
        </select>

        <br />

        <label>P</label>
        <select name="apP_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="P1_lb">1</option>
          <option value="P2_lb">2</option>
          <option value="P3_lb">3</option>
          <option value="P4_lb">4</option>
        </select>
        <label>–</label>
        <select name="apP_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="P1_ub">1</option>
          <option value="P2_ub">2</option>
          <option value="P3_ub">3</option>
          <option value="P3_ub">4</option>
        </select>

        <br />

        <label>Q</label>
        <select name="apQ_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="Q1_lb">1</option>
          <option value="Q2_lb">2</option>
          <option value="Q3_lb">3</option>
          <option value="Q3_lb">4</option>
        </select>
        <label>–</label>
        <select name="apQ_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="Q1_ub">1</option>
          <option value="Q2_ub">2</option>
          <option value="Q3_ub">3</option>
          <option value="Q3_ub">4</option>
        </select>

        <br />

        <label>K</label>
        <select name="apK_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="K1_lb">1</option>
          <option value="K2_lb">2</option>
          <option value="K3_lb">3</option>
          <option value="K3_lb">4</option>
        </select>
        <label>–</label>
        <select name="apK_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="K1_ub">1</option>
          <option value="K2_ub">2</option>
          <option value="K3_ub">3</option>
          <option value="K3_ub">4</option>
        </select>

        <br />

        <label>F</label>
        <select name="apF_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="F1_lb">1</option>
          <option value="F2_lb">2</option>
          <option value="F3_lb">3</option>
          <option value="F3_lb">4</option>
        </select>
        <label>–</label>
        <select name="apF_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="F1_ub">1</option>
          <option value="F2_ub">2</option>
          <option value="F3_ub">3</option>
          <option value="F3_ub">4</option>
        </select>

        <br />

        <label>M</label>
        <select name="apM_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="M1_lb">1</option>
          <option value="M2_lb">2</option>
          <option value="M3_lb">3</option>
          <option value="M3_lb">4</option>
        </select>
        <label>–</label>
        <select name="apM_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="M1_ub">1</option>
          <option value="M2_ub">2</option>
          <option value="M3_ub">3</option>
          <option value="M3_ub">4</option>
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
          <option value="D1_lb">1</option>
          <option value="D2_lb">2</option>
          <option value="D3_lb">3</option>
          <option value="D4_lb">4</option>
          <option value="D5_lb">5</option>
          <option value="D6_lb">6</option>
          <option value="D7_lb">7</option>
          <option value="D8_lb">8</option>
        </select>
        <label>–</label>
        <select name="dptD_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="D1_ub">1</option>
          <option value="D2_ub">2</option>
          <option value="D3_ub">3</option>
          <option value="D4_ub">4</option>
          <option value="D5_ub">5</option>
          <option value="D6_ub">6</option>
          <option value="D7_ub">7</option>
          <option value="D8_ub">8</option>
        </select>

        <br />

        <label>P</label>
        <select name="dptP_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="P1_lb">1</option>
          <option value="P2_lb">2</option>
          <option value="P3_lb">3</option>
          <option value="P4_lb">4</option>
          <option value="P5_lb">5</option>
          <option value="P6_lb">6</option>
          <option value="P7_lb">7</option>
          <option value="P8_lb">8</option>
        </select>
        <label>–</label>
        <select name="dptP_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="P1_ub">1</option>
          <option value="P2_ub">2</option>
          <option value="P3_ub">3</option>
          <option value="P4_ub">4</option>
          <option value="P5_ub">5</option>
          <option value="P6_ub">6</option>
          <option value="P7_ub">7</option>
          <option value="P8_ub">8</option>
        </select>

        <br />
        <label>T</label>
        <select name="dptT_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="T1_lb">1</option>
          <option value="T2_lb">2</option>
          <option value="T3_lb">3</option>
          <option value="T4_lb">4</option>
          <option value="T5_lb">5</option>
          <option value="T6_lb">6</option>
          <option value="T7_lb">7</option>
          <option value="T8_lb">8</option>
        </select>
        <label>–</label>
        <select name="dptT_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="T1_ub">1</option>
          <option value="T2_ub">2</option>
          <option value="T3_ub">3</option>
          <option value="T4_ub">4</option>
          <option value="T5_ub">5</option>
          <option value="T6_ub">6</option>
          <option value="T7_ub">7</option>
          <option value="T8_ub">8</option>
        </select>

        <br />

        <h3>Physical Activities 💪</h3>
        <label>V</label>
        <select name="phV_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="V1_lb">1</option>
          <option value="V2_lb">2</option>
          <option value="V3_lb">3</option>
          <option value="V4_lb">4</option>
        </select>
        <label>–</label>
        <select name="phV_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="V1_ub">1</option>
          <option value="V2_ub">2</option>
          <option value="V3_ub">3</option>
          <option value="V4_ub">4</option>
        </select>

        <br />

        <label>C</label>
        <select name="phC_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="C0_ub">0</option>
          <option value="C1_ub">1</option>
        </select>
        <label>–</label>
        <select name="phC_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="C0_ub">0</option>
          <option value="C1_ub">1</option>
        </select>

        <br />

        <label>H</label>
        <select name="phH_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="H1_lb">1</option>
          <option value="H2_lb">2</option>
          <option value="H3_lb">3</option>
        </select>
        <label>–</label>
        <select name="phH_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="H1_ub">1</option>
          <option value="H2_ub">2</option>
          <option value="H3_ub">3</option>
        </select>

        <br />

        <label>B</label>
        <select name="phB_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="B1_lb">1</option>
          <option value="B2_lb">2</option>
          <option value="B3_lb">3</option>
          <option value="B4_lb">4</option>
        </select>
        <label>–</label>
        <select name="phB_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="B1_ub">1</option>
          <option value="B2_ub">2</option>
          <option value="B3_ub">3</option>
          <option value="B4_ub">4</option>
        </select>

        <br />

        <label>L</label>
        <select name="phL_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="L0_lb">0</option>
          <option value="L1_lb">1</option>
          <option value="L2_lb">2</option>
        </select>
        <label>–</label>
        <select name="phL_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="L0_ub">0</option>
          <option value="L1_ub">1</option>
          <option value="L2_ub">2</option>
        </select>

        <br />

        <label>S</label>
        <select name="phS_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="S1_lb">1</option>
          <option value="S2_lb">2</option>
          <option value="S3_lb">3</option>
          <option value="S4_lb">4</option>
        </select>
        <label>–</label>
        <select name="phS_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="S1_ub">1</option>
          <option value="S2_ub">2</option>
          <option value="S3_ub">3</option>
          <option value="S4_ub">4</option>
        </select>

        <br />

        <h3>Environmental Conditions 🏢 🌳 🚖</h3>
        <label>L</label>
        <select name="ecL_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="L1_lb">1</option>
          <option value="L2_lb">2</option>
          <option value="L3_lb">3</option>
          <option value="L4_lb">4</option>
        </select>
        <label>–</label>
        <select name="ecL_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="L1_ub">1</option>
          <option value="L2_ub">2</option>
          <option value="L3_ub">3</option>
          <option value="L4_ub">4</option>
        </select>

        <br />

        <label>H</label>
        <select name="ecH_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="H1_lb">0</option>
          <option value="H2_lb">1</option>
          <option value="H3_lb">3</option>
          <option value="H4_lb">4</option>
          <option value="H5_lb">5</option>
          <option value="H6_lb">6</option>
          <option value="H7_lb">7</option>
          <option value="H8_lb">8</option>
        </select>
        <label>–</label>
        <select name="ecH_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="H1_ub">0</option>
          <option value="H2_ub">1</option>
          <option value="H3_ub">3</option>
          <option value="H4_ub">4</option>
          <option value="H5_ub">5</option>
          <option value="H6_ub">6</option>
          <option value="H7_ub">7</option>
          <option value="H8_ub">8</option>
        </select>

        <br />

        <label>D</label>
        <select name="ecD_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="D1_lb">1</option>
          <option value="D2_lb">2</option>
          <option value="D3_lb">3</option>
          <option value="D4_lb">4</option>
          <option value="D5_lb">5</option>
        </select>
        <label>–</label>
        <select name="ecD_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="D1_ub">1</option>
          <option value="D2_ub">2</option>
          <option value="D3_ub">3</option>
          <option value="D4_ub">4</option>
          <option value="D5_ub">5</option>
        </select>
        <br />

        <h3>Employment Requirements 🎓</h3>
        <select name="et_lb" onChange={e => this.change(e)}>
          <option value="" />
          <option value="1_lb">1</option>
          <option value="2_lb">2</option>
          <option value="3_lb">3</option>
          <option value="4_lb">4</option>
          <option value="5_lb">5</option>
          <option value="6_lb">6</option>
          <option value="7_lb">7</option>
          <option value="8_lb">8</option>
          <option value="+_lb">+</option>
          <option value="R_lb">R</option>
        </select>
        <label>–</label>
        <select name="et_ub" onChange={e => this.change(e)}>
          <option value="" />
          <option value="1_ub">1</option>
          <option value="2_ub">2</option>
          <option value="3_ub">3</option>
          <option value="4_ub">4</option>
          <option value="5_ub">5</option>
          <option value="6_ub">6</option>
          <option value="7_ub">7</option>
          <option value="8_ub">8</option>
          <option value="+_ub">+</option>
          <option value="R_ub">R</option>
        </select>
        <br />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default Form;
