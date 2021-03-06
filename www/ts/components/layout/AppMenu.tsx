import * as React from "react";
import {connect} from 'react-redux';
import Tool from '../../pub/Tool';
import {getMenuAction, saveParentActive, saveChildActive,changeActiveAction} from '../../redux/actions/MenuAction';

interface AppMenuProps {
    active:number;
    MenuReducers: any;
    dispatch: Function;
    parentActive?: any;
    childActive?: any;
}

class AppMenu extends React.Component<AppMenuProps, any>{
     /**
     * 设置默认属性头部
     */
    //TODO: 添加默认属性static与redux会报错,尚未解决.纯组件状态下能结合
    /*static defaultProps = {
        parentActive: ACTIVE.parentActive.parentkey,
        childActive: ACTIVE.childActive.childkey
     }*/
     
    constructor(props){
        super(props);
        let {MenuReducers, dispatch} = this.props;
        //让当前函数this 指向到类本身
        this.createItem = this.createItem.bind(this);
        this.state = {
            parentActive: MenuReducers.active.parent,
            childActive: MenuReducers.active.child
        }
       /*this.state = {
            parentActive: this.props.parentActive,
            childActive: this.props.childActive
        }*/
       //console.log(this.props)
    }
    
    handleOrderTabClick(event, parentIndex, parentName,URL) {
        let {MenuReducers, dispatch} = this.props;
        //this.setState({ parentActive: parentIndex,childActive:-1});
        dispatch(changeActiveAction({ parent: parentIndex, child: -1 }))
        if(Tool.hasClass(event.target.parentNode,'active')){
            Tool.removeClass(event.target.parentNode, 'active');
        }else{
            Tool.addClass(event.target.parentNode, 'active');
        }
        let active_Json = { parentkey: parentIndex, parentvalue: parentName };
        saveParentActive(active_Json);
        if(URL.indexOf('#')){
            Tool.goPush(URL);
        }
        //防止冒泡多次触发
        event.preventDefault();
        event.stopPropagation();
    }

    push(event,childIndex,childName,URL){
        let {MenuReducers, dispatch} = this.props;
        dispatch(changeActiveAction({ parent: MenuReducers.active.parent, child: childIndex }))
        let active_Json = { childkey: childIndex, childvalue: childName };
        saveChildActive(active_Json);
        Tool.goPush(URL);
        //防止冒泡多次触发
        event.preventDefault();
        event.stopPropagation();
    }

    createItem(item,index){
        let {MenuReducers, dispatch} = this.props;
        //判断是否存在子菜单
        let hasChild = item.subMunu.length > 0 ? true : false;
        let parentActive = MenuReducers.active.parent == index ? "cwgj-menu-parent-item active" : "cwgj-menu-parent-item";
        let ParentUrl = item.url;
        return (
            <li key={index} className={ parentActive } >
                <h3 className = {hasChild ? 'on' : 'off'} data-href = {ParentUrl} onClick = {(event) => this.handleOrderTabClick(event, index, item.name, ParentUrl) }>{item.name}</h3>
                { hasChild ? (
                    <ul className="cwgj-menu-child">
                        {item.subMunu.map((childItem,childIndex) => {
                            let ChildUrl =  childItem.url;
                            let childActive = MenuReducers.active.child == childIndex ? "cwgj-menu-child-item chd-active" : "cwgj-menu-child-item";
                            return (<li key = {childIndex}  className={ childActive }>
                                <a href={URL} onClick = {(event) => this.push(event, childIndex, childItem.name, ChildUrl) }>{childItem.name}</a>
                                    </li>
                                    )
                        })}
                    </ul>) : null}
            </li>
        )
    }

    render(){
        let {MenuReducers, dispatch} = this.props;
        return (
          <div className="cwgj-menu">
              <ul className="cwgj-menu-parent" >
                  {MenuReducers.menuList.map(this.createItem)}
              </ul>
          </div>
        );
  }

    componentDidMount() {
        let {dispatch} = this.props;
        /**
         * 读取菜单数据
         */
        dispatch(getMenuAction());
        
    }

}



let mapStateToProps = (state) => {
    return {
        MenuReducers: state.MenuReducers
    }
}

export default connect(mapStateToProps)(AppMenu);