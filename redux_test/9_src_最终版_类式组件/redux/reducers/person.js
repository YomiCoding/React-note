import { ADD_PERSON } from "../constant";

//初始化人的列表
const initState = [{ id: "001", name: "tom", age: 18 }];

export default function personReducer(preState = initState, action) {
  // console.log('personReducer@#@#@#');
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON: //若是添加一个人
      //preState.unshift(data) //此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了。
      return [data, ...preState];
    default:
      return preState;
  }
}

// reducers本质是一个函数，接收两个参数，一个是之前的状态，一个是动作对象，返回一个新的状态
//  作用是初始化状态，加工状态
