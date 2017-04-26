import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    renderDescription() {
        const { library, selectedLibraryID } = this.props;
        // console.log(`library: ${library.id}, selectedLibraryID: ${selectedLibraryID}`);
        if (library.id === selectedLibraryID) {
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
        paddingLeft: 15
    }
};

const MapStateToProps = state => {
    return { selectedLibraryID: state.selectedLibraryID };
};
export default connect(MapStateToProps, actions)(ListItem);

// first parameter passes the props and the second passes the actions. 
