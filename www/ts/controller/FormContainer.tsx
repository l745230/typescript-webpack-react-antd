import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    FormGroup,
    FormItems,
    InputText,
    InputSelect,
    InputRadio,
    InputCheckbox,
    CheckGroup,
    RadioGroup,
    Buttons,
    InfoText,
    SelectGroup} from '../components/index';
import {changeActiveAction} from '../redux/actions/MenuAction';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
const store = BaseStore({  });
//数据流向
class IndexApp extends BaseContainer {
    date:any[];
    SelectGroupDate:any[];
    constructor(props) {
        super(props);
        this.date = [{
            label: '北京',
            value: '1'
        }];
        
        this.SelectGroupDate = [{
            label: '福建省',
            options:[{
                label: '福州',
                value: '1'
            },
                {
                    label: '厦门',
                    value: '2'
                }]
        },
            {
                label: '北京市',
                options: [{
                    label: '北京',
                    value: '1'
                }]
            }];
    }

    handleInputChange(event) {
        console.log(event.target.value)
    }

    handleRadioChange(event){
        console.log(event)
    }

    handleCheckboxChange(event){
        //console.log(event.target.checked)
        console.log(event.target.checked)
    }

    handleCheckGroupChange(checkedValues){
        console.log('checked = ', checkedValues);
    }

    valueChange(name, value) {
        console.log(name,value)
    }

    render() {

        return (
            <AppBody>
                <Panel title="默认-垂直-表单面板" >
                    <FormGroup>
                        <FormItems label="提示文本域" help = "请输入你要提示的文本域内容">
                            <InfoText>56.2元</InfoText>
                        </FormItems>
                        <FormItems label="普通文本域" help = "请输入你要提示的文本域内容">
                            <InputText type="test" />
                        </FormItems>
                        <FormItems label="投放位置">
                            <RadioGroup>
                                <InputRadio label="全部" defaultChecked name="delivery_channel" value="1" onChange={(event) => this.valueChange('delivery_channel', event.target.value) }/>
                                <InputRadio label="微信" name="delivery_channel" value="2" onChange={(event) => this.valueChange('delivery_channel', event.target.value) }/>
                                <InputRadio label="APP"  name="delivery_channel" value="3"  onChange={(event) => this.valueChange('delivery_channel', event.target.value) }/>
                            </RadioGroup>
                        </FormItems>
                        <FormItems label="密码文本域">
                            <InputText type="password" />
                        </FormItems>
                        <FormItems label="普通下拉选择框">
                            <InputSelect  items={this.date} defaultValue = "福州" onChange={(event) => this.handleInputChange(event) } />
                        </FormItems>
                        <FormItems label="复选框">
                            <InputCheckbox label="选择" name="circle" value="1" onChange={(event) => this.handleCheckboxChange(event) }/>
                        </FormItems>
                        <FormItems label="复选框组">
                            <CheckGroup  options={[{ label: '短信通知', value: '1' }, { label: '邮件通知', value: '2' }]} defaultValue={['1']} onChange={(checkedValues) => this.handleCheckGroupChange(checkedValues) }/>
                        </FormItems>
                        <FormItems label="复选框组-锁">
                            <CheckGroup  options={[{ label: '短信通知', value: '1' }, { label: '邮件通知', value: '2' }]}  disabled defaultValue={['1']} onChange={(checkedValues) => this.handleCheckGroupChange(checkedValues) }/>
                        </FormItems>
                        <FormItems label="不可选择复选框">
                            <InputCheckbox label="选择" name="circle" value="1" disabled onChange={(option) => this.handleCheckboxChange(option) }/>
                        </FormItems>
                        <FormItems label="选择不可选择复选框">
                            <InputCheckbox label="选择" name="circle" value="1" checked disabled onChange={(option) => this.handleCheckboxChange(option) }/>
                        </FormItems>
                        <FormItems >
                            <Buttons type = "primary" display = "block" >登录</Buttons>
                            <Buttons type = "success" display = "block" >注册</Buttons>
                        </FormItems>
                    </FormGroup>
                </Panel>
                <Panel title="水平-表单面板" >
                    <FormGroup horizontal >
                        <FormItems label="提示文本域">
                            <InfoText>56.2元</InfoText>
                        </FormItems>
                        <FormItems label="用户名">
                            <InputText type="test" />
                        </FormItems>
                        <FormItems label="数字" >
                            <InputText type="number" placeholder="请输入数字"/>
                        </FormItems>
                        <FormItems label="密码" >
                            <InputText type="password" placeholder="请输入你要提示的文本域内容"/>
                        </FormItems>
                        <FormItems label="普通下拉选择框">
                            <InputSelect  items={this.date} onChange={(event) => this.handleInputChange(event) } />
                        </FormItems>
                        <FormItems label="下拉选择组">
                            <SelectGroup  items={this.SelectGroupDate} onChange={(event) => this.handleInputChange(event) } />
                        </FormItems>
                        <FormItems label="禁用普通下拉选择框">
                            <InputSelect  items={this.date} disabled onChange={(event) => this.handleInputChange(event) } />
                        </FormItems>
                        <FormItems label="单选按钮">
                            <RadioGroup>
                                <InputRadio label="全部" name="delivery_channel" value="1" defaultChecked  onChange={(event) => this.handleRadioChange(event) }/>
                                <InputRadio label="微信" name="delivery_channel" value="2" onChange={(event) => this.handleRadioChange(event) }/>
                                <InputRadio label="APP"  name="delivery_channel" value="3"  onChange={(event) => this.handleRadioChange(event) }/>
                            </RadioGroup>
                        </FormItems>
                        <FormItems label="未选不可选单选按钮">
                            <InputRadio label="全部" name="delivery_channel1" value="-1" disabled onChange={(event) => this.handleRadioChange(event) }/>
                        </FormItems>
                        <FormItems label="已选不可选单选按钮">
                            <InputRadio label="全部" name="delivery_channel2" value="-1" defaultChecked disabled onChange={(event) => this.handleRadioChange(event) }/>
                        </FormItems>
                        <FormItems label="复选框">
                            <InputCheckbox label="选择" name="circle" value="1" onChange={(event) => this.handleCheckboxChange(event) }/>
                        </FormItems>
                        <FormItems label="复选框组">
                            <CheckGroup  options={[{ label: '短信通知', value: '1' }, { label: '邮件通知', value: '2' }]} defaultValue={['1']} onChange={(checkedValues) => this.handleCheckGroupChange(checkedValues) }/>
                        </FormItems>
                        <FormItems label="复选框组-锁">
                            <CheckGroup  options={[{ label: '短信通知', value: '1' }, { label: '邮件通知', value: '2' }]}  disabled defaultValue={['1']} onChange={(checkedValues) => this.handleCheckGroupChange(checkedValues) }/>
                        </FormItems>
                        <FormItems label="不可选择复选框">
                            <InputCheckbox label="选择" name="circle" value="1" disabled onChange={(event) => this.handleCheckboxChange(event) }/>
                        </FormItems>
                        <FormItems label="选择不可选择复选框">
                            <InputCheckbox label="选择" name="circle" value="1" checked disabled onChange={(event) => this.handleCheckboxChange(event) }/>
                        </FormItems>
                        <FormItems BtnFormItems>
                            <Buttons type = "primary"  >登录</Buttons>
                            <Buttons type = "success">注册</Buttons>
                        </FormItems>
                    </FormGroup>
                </Panel>
                <Panel title="行内-表单面板" >
                    <FormGroup inline >
                        <FormItems>
                            <InputText type="test" placeholder="请输入账号"/>
                        </FormItems>
                        <FormItems>
                            <InputText type="password" placeholder="请输入密码"/>
                        </FormItems>
                        <FormItems >
                            <InputCheckbox label="记住密码" name="circle" value="1" onChange={(event) => this.handleCheckboxChange(event) }/>
                        </FormItems>
                        <FormItems >
                            <Buttons type = "primary">登录</Buttons>
                        </FormItems>
                    </FormGroup>
                </Panel>
                <Panel title="特殊文本域" >
                    <FormGroup horizontal >
                        <FormItems label="用户名">
                            <InputText type="test" addonAfter="美元"/>
                        </FormItems>
                    </FormGroup>
                    <FormGroup horizontal >
                        <FormItems label="用户名">
                            <InputText type="test" addonBefore="输入" addonAfter="元"/>
                        </FormItems>
                    </FormGroup>
                </Panel>
            </AppBody>
        );
    }

    componentDidMount():void {
        let {MenuReducers, dispatch} = this.props;
        dispatch(changeActiveAction({ parent: 9, child: 0 }))
    }
    
    componentWillUnmount():void {
        
    }
}

let mapStateToProps = (state) => {
    return {
        IndexReducers: state.IndexReducers
    }
}

/**
 * 添加监听数据
 */
const App = connect(mapStateToProps)(IndexApp);
const ElementContainer = document.getElementById("example");
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    ElementContainer
);



