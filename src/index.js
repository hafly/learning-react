import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const users = [
    {username: 'Jerry', age: 21, gender: 'male'},
    {username: 'Tomy', age: 22, gender: 'male'},
    {username: 'Lily', age: 19, gender: 'female'},
    {username: 'Lucy', age: 20, gender: 'female'}
]

class User extends Component {
    render() {
        const {user} = this.props;
        console.log(this.props);
        console.log(user);
        return (
            <div>
                <div>姓名：{user.username}</div>
                <div>年龄：{user.age}</div>
                <div>性别：{user.gender}</div>
                <hr/>
            </div>
        )
    }
}

class Index extends Component {
    render() {
        // 方法一
        // const usersElements = [] // 保存每个用户渲染以后 JSX 的数组
        // for (let user of users) {
        //     // 循环每个用户，构建 JSX，push 到数组中
        //     usersElements.push(
        //         <div>
        //             <div>姓名：{user.username}</div>
        //             <div>年龄：{user.age}</div>
        //             <div>性别：{user.gender}</div>
        //             <hr/>
        //         </div>
        //     )
        // }
        // console.log(usersElements)
        //
        // return (
        //     <div>{usersElements}</div>
        // )

        // 方法二：使用 map 渲染列表数据
        // return(
        //     <div>
        //         {users.map((user) => {
        //             return (
        //                 <div>
        //                     <div>姓名：{user.username}</div>
        //                     <div>年龄：{user.age}</div>
        //                     <div>性别：{user.gender}</div>
        //                     <hr />
        //                 </div>
        //             )
        //         })}
        //     </div>
        // )

        // 方法三：把负责展示用户数据的 JSX 结构抽离成一个组件 User ，并且通过 props 把 user 数据作为组件的配置参数传进去
        return (
            <div>
                {/*在实际项目当中，如果你的数据顺序可能发生变化，标准做法是最好是后台数据返回的 id 作为列表元素的 key。*/}
                {users.map((user, i) => <User key={i} user={user}/>)}
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);