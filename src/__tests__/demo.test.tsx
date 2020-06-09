import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { openToast } from '../component/Toast/index'

configure({ adapter: new Adapter() })

test('1加1等于2', () => {
    expect(1 + 1).toBe(2)
});

test('Jest-React-TypeScript 尝试运行', () => {
    const renderer = shallow(<div>hello world</div>)
    expect(renderer.text()).toEqual('hello world')
})

describe('测试toast组件', () => {
    // 通过传递模拟的props,测试组件是否正常渲染
    it('open toast', () => {
        const onButtonClick = openToast('toast test');
        const wrapper = shallow(
            <div onClick={() => onButtonClick} />
        );
        // 详细用法见 Enzyme 文档 http://airbnb.io/enzyme/docs/api/shallow.html
        wrapper.find('div').simulate('click');
        expect(onButtonClick);
    })
})
