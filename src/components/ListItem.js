import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;
        // console.log(`library: ${library.id}, selectedLibraryID: ${selectedLibraryID}`);
        if (expanded) {
            return (
                <Text>{library.description}</Text>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;
        return (
            <TouchableWithoutFeedback 
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>     
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        flex: 1
    }
};

const MapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryID === ownProps.library.id;

    return { expanded };
};
export default connect(MapStateToProps, actions)(ListItem);

// first parameter passes the props and the second passes the actions. 
