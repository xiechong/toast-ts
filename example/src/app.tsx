import * as React from 'react'
import { openToast } from '../../lib/index';
// tslint:disable-next-line:no-empty-interface
interface IProps {}

// tslint:disable-next-line:no-empty-interface
interface IStates {}
class App extends React.Component<IProps, IStates> {
    public onClickHandler() {
        openToast('打开toast成功');
    }
    render() {
        return (
            <React.Fragment>
                <div onClick={() => this.onClickHandler()}>打开toast</div>
            </React.Fragment>
        )
    }
}

export default App
