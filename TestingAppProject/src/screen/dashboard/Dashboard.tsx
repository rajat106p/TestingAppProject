import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  View,
  FlatList,
} from 'react-native';

import { styles } from '../../globalstyle/Styles';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getPostList } from '../../store/action';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

export const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  const postListData = useSelector(state => state?.reducer?.list)
  const Loader = useSelector(state => state?.reducer?.status)

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      dispatch(getPostList()); // Dispatch the action to fetch the post list
    } catch (error) {
      console.log('error======>>>>>', error);
    }    
  };


  const renderItem = (item: any) => (
    <TouchableOpacity
      style={styles.apidatacontainer}
      onPress={() => getdata(item)}
    >
      <Text style={styles.titletxt}>{item.title}</Text>
      <Text>{item.body}</Text>
    </TouchableOpacity>
  )

  const renderPostListBody = () => (
    <FlatList
      data={postListData}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={item => item?.id}
    />
  )

  const getdata = (item) => {
    navigation.navigate('Listdata', { item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={90}
        style={{ flex: 1 }}
      >
          <Text style={styles.headertxt}>Welcome to Dashboard</Text>
          <TouchableOpacity style={styles.refecebuttoncontainer} onPress={fetchUser}>
            <Text style={styles.buttontxt}>Refresh</Text>
          </TouchableOpacity>
          {Loader ? (
            <ActivityIndicator size="large" color="grey" style={styles.loadingIndicator} />
          ) : (
            <View>
              {renderPostListBody()}
            </View>
          )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};