import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, IRootState } from '../../store';
import LayerBrowseList from './LayerBrowseList';
import LayerFilterActions from './LayerFilterActions';
import LayerHeader from './LayerHeader';
import LayerSelectedActions from './LayerSelectedActions';

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;
class LayerList extends React.Component<Props> {
    public render() {
        const { name } = this.props.mapStyle;
        return (
            <div
                id="card-style-layers-pane"
                className=" absolute top left bottom bg-white flex-parent flex-parent--column "
                style={{ width: '210px' }}
            >
                <div className="flex-child flex-child--no-shrink my3 pt6 pb6 mx12 border-b border--gray-light">
                    <LayerHeader
                        name={name}
                        route="/"
                        onConfirm={this.props.renameStylesheet}
                    />
                    <div className="mt6 mb6 pt6 border-t border--gray-light">
                        <LayerSelectedActions />
                    </div>
                    <div>
                        <LayerFilterActions />
                    </div>
                </div>
                <div className="flex-child flex-child--grow scroll-auto scroll-styled">
                    <LayerBrowseList />
                </div>
            </div>
        );
    }
}

const mapState = (state: IRootState) => ({
    mapStyle: state.mapStyle,
});

const mapDispatch = (dispatch: Dispatch) => ({
    renameStylesheet: (name: string) => dispatch.mapStyle.rename(name),
});

export default connect(
    mapState,
    mapDispatch,
)(LayerList);
