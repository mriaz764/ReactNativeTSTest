import React, { useState, useEffect } from "react";

import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState, getQuestions } from "../store";
import { Button } from "../components/Button";
import { ButtonSmall } from "../components/ButtonSmall";

export const StartExercise = () => {
    const dispatch = useDispatch();

    const { questions, error } = useSelector(
        (state: ApplicationState) => state.questionReducer
      );

      
  
    useEffect(() => {
        onStart();
    }, []);

    const onStart = () => {
        dispatch(getQuestions());
      };

    const onTapBtn = () => {
        
      };

    return (
    <View style = {styles.container}>
        <View style={styles.navigation}></View>
        <View style={styles.body}>
            <Text style={styles.text1}>Fill in the missing word</Text>
           
            {questions !== null && questions.length > 0 && (
                <Text style={styles.text2}>
                {questions[0].question}
                </Text>
            )}
            <View style = {styles.centerBtn}> 
            <View style = {styles.row1}>
            <ButtonSmall
                title="Folgen"
                onTap={onTapBtn} 
                isTap = {false}
                />
                <ButtonSmall
                title="Schaf"
                onTap={onTapBtn} 
                isTap = {false}
                />
            </View>
            <View style = {styles.row1}>
            <ButtonSmall
                title="Room"
                onTap={onTapBtn} 
                isTap = {false}
                />
                <ButtonSmall
                title="Hose"
                onTap={onTapBtn} 
                isTap = {false}
                />
            </View>  
               
            
             </View>
        <View>

        </View>
        <Button title="CONTINUE" onTap={onTapBtn} /> 
        </View>
       
    </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#74dbfd',

    },
    navigation: {
        flex: 2,
      },
      body: {
        flex: 9,
        backgroundColor: '#577f90',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        padding:30,
        alignItems:'center'

      },
      centerBtn:{
          flex:5,
          alignItems:'center',
          justifyContent: 'center',
      },
      row1:{
          flexDirection:'row'
      },
      footer: {
        flex: 1,
      },
      text1: {
        fontSize: 20,
        color: '#f0f1f2',
      },
      text2: {
        fontSize: 30,
        color: '#f0f1f2',
        marginTop:30,
      },
})