import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button, Card, Layout, Modal, Slider } from 'antd';
import { ThunderboltOutlined, SettingOutlined } from '@ant-design/icons';
import { quotes, quoteGroup } from './Quotes'
// const { TextArea } = Input;
const { Content, Footer } = Layout;

const rand = (arr) => {
  const size = arr.length;
  const idx = Math.floor(Math.random() * size);
  return arr[idx];
}

class App extends React.Component {
  constructor(props) {
    super(props);
    const quoteSentence = rand(quotes);
    this.state = {
      quoteSentence: quoteSentence,
      quote: '',
      visible: false
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  getQuoteSentence() {
    const q = rand(quotes);
    this.setState({ quoteSentence: q });
    return q;
  }

  getQuote() {
    this.setState({ quote: 'WIP...' });
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
            <Card title="加 大 力 度" className="center" extra={<div><Button shape="circle" icon={<SettingOutlined />} onClick={() => this.showModal()}></Button> <Button type="primary" shape="circle" icon={<ThunderboltOutlined />} onClick={() => this.getQuote()}></Button></div>} style={{ width: 300 }}>
              <p>{this.state.quote}</p>
            </Card>
          </Content>
          <Footer style={{ textAlign: 'center' }}>圣传义der到教会 ©2020 Created with ❤</Footer>
        </Layout>
        <Modal
          title="炼丹炉"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Slider defaultValue={30}/>
        </Modal>
      </div>
    );
  }

}

export default App;
