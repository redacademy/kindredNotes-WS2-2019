import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import {useActiveNote} from '../../hooks'
import {Header} from '../Typography'
import styles from './SentNote.styles'

const SentNote = () => {
  const {activeNote} = useActiveNote()

  return (
    <SafeAreaView style={styles.sentContainer}>
      <View style={styles.container}>
        <View style={styles.sentNote}>
          <Text style={styles.message}>{activeNote.message}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.font}>See who read it</Text>
          </TouchableOpacity>
        </View>
        <Header>Who appreciated your note</Header>
      </View>
    </SafeAreaView>
  )
}

export default SentNote