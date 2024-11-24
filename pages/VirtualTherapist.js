
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export const VirtualTherapist = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: "Hello! How are you feeling today?", sender: 'bot' },
  ]);
  const [userInput, setUserInput] = useState('');

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    // User message
    const newMessage = { id: Date.now().toString(), text: userInput, sender: 'user' };
    setMessages([...messages, newMessage]);

    // Therapist response
    setTimeout(() => {
      const botResponse = { id: Date.now().toString(), text: "I'm here to listen.", sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);

    setUserInput('');
  };

  const renderItem = ({ item }) => (
    <View style={item.sender === 'bot' ? styles.botMessage : styles.userMessage}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={userInput}
          onChangeText={setUserInput}
          placeholder="Type your message..."
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FAFAFA',        // Soft pastel background color
  },

  chatContainer: {
    flex: 1,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#D3E4CD',            // Soft pastel green for the input border
    borderRadius: 20,
    backgroundColor: '#F6F7FB',        // Very light pastel background for the input
  },

  sendButton: {
    backgroundColor: '#B4C9C7',        // Muted pastel green for the send button
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
  },

  sendButtonText: {
    color: '#FFFFFF',                  // White text for contrast
    fontWeight: 'bold',
  },

  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#F3D1DC',        // Soft pastel pink for user messages
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },

  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',        // Soft gray for bot messages to maintain calmness
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },

  messageText: {
    fontSize: 16,
    color: '#4C5C68',                 // Soft muted color for text
  },
});


export default VirtualTherapist;
