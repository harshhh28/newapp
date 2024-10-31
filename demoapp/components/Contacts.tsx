import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Contacts() {
  return (
    <View>
      <Text style={styles.headingText}>Contacts</Text>
      <View style={styles.container}>
        <View style={styles.contactContainer}>
          <Image
            source={{
              uri: 'https://imgs.search.brave.com/SSQ19YeGr69Sg2MN8ZuBKklUBHVNrtWkJODXo9yI5c0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1IvcmVhY3Qt/bmF0aXZlLWxvZ28t/MjIxQzY3MUM3MC1z/ZWVrbG9nby5jb20u/cG5n',
            }}
            style={styles.ContactImage}
          />
          <View style={styles.contactTextContainer}>
            <Text style={styles.ContactName}>John Doe</Text>
            <Text style={styles.contactMessagge}>Hi There!</Text>
          </View>
        </View>
        <View style={styles.contactContainer}>
          <Image
            source={{
              uri: 'https://imgs.search.brave.com/SSQ19YeGr69Sg2MN8ZuBKklUBHVNrtWkJODXo9yI5c0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1IvcmVhY3Qt/bmF0aXZlLWxvZ28t/MjIxQzY3MUM3MC1z/ZWVrbG9nby5jb20u/cG5n',
            }}
            style={styles.ContactImage}
          />
          <View style={styles.contactTextContainer}>
            <Text style={styles.ContactName}>John Doe</Text>
            <Text style={styles.contactMessagge}>Hi There!</Text>
          </View>
        </View>
        <View style={styles.contactContainer}>
          <Image
            source={{
              uri: 'https://imgs.search.brave.com/SSQ19YeGr69Sg2MN8ZuBKklUBHVNrtWkJODXo9yI5c0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1IvcmVhY3Qt/bmF0aXZlLWxvZ28t/MjIxQzY3MUM3MC1z/ZWVrbG9nby5jb20u/cG5n',
            }}
            style={styles.ContactImage}
          />
          <View style={styles.contactTextContainer}>
            <Text style={styles.ContactName}>John Doe</Text>
            <Text style={styles.contactMessagge}>Hi There!</Text>
          </View>
        </View>
        <View style={styles.contactContainer}>
          <Image
            source={{
              uri: 'https://imgs.search.brave.com/SSQ19YeGr69Sg2MN8ZuBKklUBHVNrtWkJODXo9yI5c0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1IvcmVhY3Qt/bmF0aXZlLWxvZ28t/MjIxQzY3MUM3MC1z/ZWVrbG9nby5jb20u/cG5n',
            }}
            style={styles.ContactImage}
          />
          <View style={styles.contactTextContainer}>
            <Text style={styles.ContactName}>John Doe</Text>
            <Text style={styles.contactMessagge}>Hi There!</Text>
          </View>
        </View>
        <View style={styles.contactContainer}>
          <Image
            source={{
              uri: 'https://imgs.search.brave.com/SSQ19YeGr69Sg2MN8ZuBKklUBHVNrtWkJODXo9yI5c0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1IvcmVhY3Qt/bmF0aXZlLWxvZ28t/MjIxQzY3MUM3MC1z/ZWVrbG9nby5jb20u/cG5n',
            }}
            style={styles.ContactImage}
          />
          <View style={styles.contactTextContainer}>
            <Text style={styles.ContactName}>John Doe</Text>
            <Text style={styles.contactMessagge}>Hi There!</Text>
          </View>
        </View>
        <View style={styles.contactContainer}>
          <Image
            source={{
              uri: 'https://imgs.search.brave.com/SSQ19YeGr69Sg2MN8ZuBKklUBHVNrtWkJODXo9yI5c0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1IvcmVhY3Qt/bmF0aXZlLWxvZ28t/MjIxQzY3MUM3MC1z/ZWVrbG9nby5jb20u/cG5n',
            }}
            style={styles.ContactImage}
          />
          <View style={styles.contactTextContainer}>
            <Text style={styles.ContactName}>John Doe</Text>
            <Text style={styles.contactMessagge}>Hi There!</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  contactContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  contactTextContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  ContactImage: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
  },
  ContactName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  contactMessagge: {
    fontSize: 14,
    marginBottom: 10,
  },
});
