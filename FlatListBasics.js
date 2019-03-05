import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View, SectionList } from 'react-native'

class FlatListBasics extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.text }>FlatList</Text>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={ ({item}) => <Text style={styles.item}>{ item.key } </Text> }
                />
                <Text style={ styles.text }>SectionList</Text>
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin', 'David']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                    renderItem={ ({item}) => <Text style={styles.item}>{item}</Text> }
                    renderSectionHeader={ ({section}) => <Text style={styles.sectionHeader}>{section.title}</Text> }
                    keyExtractor={ (item, index) => index }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    text: {
        fontSize: 20,
        padding: 20,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgb(209, 224, 224)',
    },
})

export default FlatListBasics;