import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, IRootState } from './store';

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

const style = { color: 'blue' };

const Counter: React.FunctionComponent<Props> = (props: Props) => (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: 120 }}>
            <h3>Dolphins</h3>
            <h1>{props.test}</h1>
            <button style={style} onClick={props.incrementTest}>
                +1
            </button>
            <br />
            <button style={style} onClick={props.incrementTestAsync}>
                Async +1
            </button>
        </div>
        <p>Using Rematch Models</p>
    </div>
);

const mapState = (state: IRootState) => ({
    test: state.test,
});

const mapDispatch = (dispatch: Dispatch) => ({
    incrementTest: () => dispatch.test.increment(),
    incrementTestAsync: () => dispatch.test.incrementAsync(),
});

export default connect(
    mapState,
    mapDispatch,
)(Counter);
