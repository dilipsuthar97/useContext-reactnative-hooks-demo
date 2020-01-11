import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';

const ItemBlog = ({ blog }) => {

    const { title, description, owner, date_by, image_url } = blog;

    return(
        <Card 
            style={styles.card} 
            elevation={4} 
            onPress={() => console.log(`${title} pressed`)}
        >
            <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
                <Avatar.Text size={35} label={`${owner.charAt(0)}`}/>
                <View style={{marginHorizontal: 8}}>
                    <Text style={styles.owner}>{owner}</Text>
                    <Text>{date_by}</Text>
                </View>
            </View>
            <Card.Cover source={{uri: image_url}}/>
            <Card.Content>
                <Title>{title}</Title>
                <Paragraph>{description}</Paragraph>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 8,
        marginHorizontal: 8
    },
    owner: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default ItemBlog;