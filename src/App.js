import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button, Card, Layout, Modal, Slider, Switch, Row } from 'antd';
import { ThunderboltOutlined, SettingOutlined } from '@ant-design/icons';
import { quotes } from './Quotes'
import { begin, beforeExe, correction, exercise, judgement, interaction, homework, reflection } from './Quotes';
// const { TextArea } = Input;
const { Content, Footer } = Layout;

const rand = (arr, num = 1) => {
  if (num === 0 || num === false) return '';
  const history = [];
  const size = arr.length;
  while (history.length < num) {
    const idx = Math.floor(Math.random() * size);
    if (history.indexOf(idx) < 0) history.push(idx);
  }
  const result = history.map((e) => arr[e]).reduce((quote, oneQuote) => quote + oneQuote, '') + '\r\n';
  // console.log(result);
  return result;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    const quoteSentence = rand(quotes);
    const quoteParam = {
      begin: true,
      bExe: true,
      correction: true,
      exe: 3,
      judgement: 2,
      interaction: true,
      homework: true,
      reflection: true
    }
    this.state = {
      quoteSentence: quoteSentence,
      quote: '做好课前准备！',
      visible: false,
      quoteParam: quoteParam
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  getQuoteSentence() {
    const sentence = rand(quotes);
    this.setState({ quoteSentence: sentence });
    return sentence;
  }

  getQuote() {
    const param = this.state.quoteParam;
    const qBegin = rand(begin, param.begin);
    const qBeforeExe = rand(beforeExe, param.bExe);
    const qCorrection = rand(correction, param.correction);
    const qExe = rand(exercise, param.exe);
    const qJudgement = rand(judgement, param.judgement);
    const qInteraction = rand(interaction, param.interaction);
    const qHw = rand(homework, param.homework);
    const qRef = rand(reflection, param.reflection);
    const quote = qBegin + qBeforeExe + qCorrection + qExe + qJudgement + qInteraction + qHw + qRef;
    // console.log(quote);
    this.setState({ quote });
  }

  setParam(e, id) {
    const param = this.state.quoteParam;
    switch (id) {
      case 3:
        param.exe = e;
        break;
      case 4:
        param.judgement = e;
        break;
      default:
        break;
    }
    this.setState({ quoteParam: param });
    // console.log(param);
  }

  switchChange(e, id) {
    const param = this.state.quoteParam;
    switch (id) {
      case 0:
        param.begin = e;
        break;
      case 1:
        param.bExe = e;
        break;
      case 2:
        param.correction = e;
        break;
      case 3:
        param.interaction = e;
        break;
      case 4:
        param.homework = e;
        break;
      case 5:
        param.reflection = e;
        break;
      default:
        break;
    }
    this.setState({ quoteParam: param });
    // console.log(`${id}->${e}`);
  }

  render() {
    return (
      <div className="App">
        <Layout style={{ minHeight: '100vh' }}>
          <Content style={{ marginTop: '40px' }}>
            <h1>传义模拟器</h1>
            <Card title="线性催逼" className="center" extra={<Button type="primary" shape="circle" icon={<ThunderboltOutlined />} onClick={() => this.getQuoteSentence()}></Button>} style={{ width: 300 }}>
              <p>{this.state.quoteSentence}</p>
            </Card>
            <Card title="加 大 力 度"
              className="center"
              extra={<div><Button shape="circle" icon={<SettingOutlined />} onClick={() => this.showModal()}></Button> <Button type="primary" shape="circle" icon={<ThunderboltOutlined />} onClick={() => this.getQuote()}></Button></div>}
              style={{ width: 300, textAlign: 'left' }}>
              <p style={{ whiteSpace: 'pre-wrap' }}>{this.state.quote}</p>
            </Card>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            圣传义der到教 ©2020 Created with ❤<br />
            <a href="https://github.com/SeanChao/ChuanyiBot"><span role="img" aria-label="star">✨</span>参与贡献</a>
          </Footer>
        </Layout>
        <Modal
          title="炼丹炉"
          visible={this.state.visible}
          footer={null}
          // onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <h4>黑色粉笔</h4>
          <Slider min={0} max={exercise.length} defaultValue={3} onChange={(e) => this.setParam(e, 3)} />
          <h4>红色粉笔</h4>
          <Slider min={0} max={judgement.length} defaultValue={2} onChange={(e) => this.setParam(e, 4)} />
          <Row span={6}>
            <Switch className="switch" defaultChecked onChange={(e) => this.switchChange(e, 0)}></Switch>
            <Switch className="switch" defaultChecked onChange={(e) => this.switchChange(e, 1)}></Switch>
            <Switch className="switch" defaultChecked onChange={(e) => this.switchChange(e, 2)}></Switch>
            <Switch className="switch" defaultChecked onChange={(e) => this.switchChange(e, 3)}></Switch>
            <Switch className="switch" defaultChecked onChange={(e) => this.switchChange(e, 4)}></Switch>
            <Switch className="switch" defaultChecked onChange={(e) => this.switchChange(e, 5)}></Switch>
          </Row>
        </Modal>
      </div>
    );
  }

}

export default App;
