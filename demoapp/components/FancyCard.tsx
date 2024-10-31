import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={{
            uri: "https://imgs.search.brave.com/SSQ19YeGr69Sg2MN8ZuBKklUBHVNrtWkJODXo9yI5c0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1IvcmVhY3Qt/bmF0aXZlLWxvZ28t/MjIxQzY3MUM3MC1z/ZWVrbG9nby5jb20u/cG5n"
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTite}>React Native</Text>
            <Text style={styles.cardLabel}>Logo</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae voluptatibus asperiores qui provident dolor labore ut voluptatem illum laborum voluptate, totam officia saepe nam excepturi molestiae sapiente eligendi expedita mollitia!</Text>
            <Text style={styles.cardFooter}>go on!</Text>
        </View>
      </View>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={{
            uri: "https://imgs.search.brave.com/SSQ19YeGr69Sg2MN8ZuBKklUBHVNrtWkJODXo9yI5c0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1IvcmVhY3Qt/bmF0aXZlLWxvZ28t/MjIxQzY3MUM3MC1z/ZWVrbG9nby5jb20u/cG5n"
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTite}>React Native</Text>
            <Text style={styles.cardLabel}>Logo</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae voluptatibus asperiores qui provident dolor labore ut voluptatem illum laborum voluptate, totam officia saepe nam excepturi molestiae sapiente eligendi expedita mollitia!</Text>
            <Text style={styles.cardFooter}>go on!</Text>
        </View>
      </View>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={{
            uri: "https://imgs.search.brave.com/SSQ19YeGr69Sg2MN8ZuBKklUBHVNrtWkJODXo9yI5c0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1IvcmVhY3Qt/bmF0aXZlLWxvZ28t/MjIxQzY3MUM3MC1z/ZWVrbG9nby5jb20u/cG5n"
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTite}>React Native</Text>
            <Text style={styles.cardLabel}>Logo</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae voluptatibus asperiores qui provident dolor labore ut voluptatem illum laborum voluptate, totam officia saepe nam excepturi molestiae sapiente eligendi expedita mollitia!</Text>
            <Text style={styles.cardFooter}>go on!</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    container: {
        padding: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: "#E34CF5",
        elevation: 3,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: "black",
        shadowOpacity: 0.4,
        shadowRadius: 2
    },
    cardImage: {
        height: 180,
        resizeMode: "contain",
        marginBottom: 8,
        marginTop: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTite: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 6
    },
    cardLabel: {
        color: "white",
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: "black",
        fontSize: 12,
        marginBottom: 6,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: "white"
    }
})