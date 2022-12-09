import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { RadioButton } from 'react-native-paper';
// import DatePicker from 'react-native-date-picker';
// import DateTimePicker from 'react-native-modal-datetime-picker';
// import { DateTimePickerModal } from 'react-native-modal-datetime-picker';


export default function App() {
  const [checked, setChecked] = useState("30")
  const [curent, setcurrent] = useState("")
  const [input, setinput] = useState(false)
  const [input1, setinput1] = useState(false)
  const [ans, setans] = useState("")
  const [newdate, setnewdate] = useState(new Date())
  const [date, setdate] = useState(new Date())
  const [mode, setmode] = useState('date')
  const [mode1, setmode1] = useState('date')
  var a, b, c, temp;

  // useEffect(()=>{
  //    a=new Date().getDate()
  //    b=new Date().getMonth()+1
  //    c=new Date().getFullYear()
  //   setcurrent(b+"/"+a+"/"+c);
  // },[])
  // const ok1=()=>{
  //   setinput(false)
  //   setnewdate(value)
  // }
  // const handle1=()=>{

  // }
  // const to=()=>{
  //   setinput(true)
  // }
  // const ok=()=>{
  //   setinput(false)
  //   setdate(value)
  // }
  // const handle=()=>{
  //   setinput(false)
  // }
  const showmode = (currentMode) => {
    setinput(true)
    setmode(currentMode)
  }
  const onchange = (event, selectedDate) => {

    const currentDate = selectedDate || date;
    // setinput(Platform.OS === 'android')
    setdate(currentDate)
    let temp = new Date(currentDate);
    let d1 = (temp.getMonth() + 1) + "/" + temp.getDate() + "/" + temp.getFullYear();
    console.log(d1)
    setinput(false)
  }

  const showmode1 = (curentMode) => {
    setinput1(true)
    setmode1(curentMode)

  }
  const onchange1 = (event, selectedDate) => {
    const curentDate = selectedDate || newdate;
    // setinput(Platform.OS === 'android')
    setnewdate(curentDate)
    temp = new Date(curentDate);
    let d2 = (temp.getMonth() + 1) + "/" + temp.getDate() + "/" + temp.getFullYear();
    console.log(d2)
    setinput1(false)
  }
  const today1 = new Date();
  const getdate1 = today1.getDate();
  const getmonth1 = today1.getMonth();
  const getyr1 = today1.getFullYear();
  const min = new Date(getyr1, getmonth1, getdate1);

  const today = new Date();
  const getdate = today.getDate();
  const getmonth = today.getMonth();
  const getyr = today.getFullYear();
  const max = new Date(getyr + 1, getmonth, getdate);
  const submit = () => {
    //  if(input.includes("/")){
    //     var nd=input.split("/");
    //     var d=nd[0];
    //     var e=nd[1];
    //     var f=nd[2];
    //     var g=a-d;
    //     var total=Math.abs(g/(1000*3000*24));
    //     console.log(total)

    //  }
    // var d=curent;
    // const one=newdate;


    const remp = newdate;
    let d1 = (remp.getMonth() + 1) + "/" + remp.getDate() + "/" + remp.getFullYear();
    var i = new Date(d1);
    const temp = (date);
    let d2 = (temp.getMonth() + 1) + "/" + temp.getDate() + "/" + temp.getFullYear();
    var o = new Date(d2)
    let time = Math.abs(i - o);
    let days = Math.ceil(time / (1000 * 60 * 60 * 24));
    console.log(d1)
    console.log(d2)
    // var u=days;
    console.log(days)
    // console.log(time)
    setans(days)
    // console.log(total)
  }
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>{newdate?.toLocaleDateString}</Text>
      <View
        style={{
          marginTop: 180,
          flexDirection: "row"
        }}>
        <TouchableOpacity onPress={() => showmode('date')}>
          <Text
            style={{
              color: "white",
              fontSize: 25,
              fontWeight: "bold"
            }}>From</Text>
        </TouchableOpacity>
        {/* <TextInput style={{
        backgroundColor:"white",
        height:40,
        width:120
      }} 
      placeholder="MM/DD/YYYY"
      >{curent}</TextInput> */}
        {/* <DateTimePicker
        isVisible={input}
        date={newdate}
        value={newdate}
        onConfirm={value=>{
          setinput(false)
          setnewdate(value)
          console.log(value)
        }}
        onCancel={()=>{
          setinput(false)
        }}
        
        ></DateTimePicker> */}

        {input && (<DateTimePicker
          testID='dateTimePicker'
          mode={mode}
          value={date}
          display='default'
          minimumDate={min}
          onChange={onchange}


        />)}

        <TouchableOpacity onPress={() => showmode1('date')}>
          <Text style={{
            color: "white",
            fontSize: 25,
            fontWeight: "bold",
            marginLeft: 20
          }}>
            To
          </Text>
        </TouchableOpacity>
        {input1 && (<DateTimePicker
          testID='dateTimePicker'
          mode={mode1}
          value={date}
          display='default'
          minimumDate={min}
          maximumDate={max}
          onChange={onchange1}


        />)}
        {/* <TextInput style={{
        backgroundColor:"white",
        height:40,
        width:120,

      }} 
      placeholder="MM/DD/YYYY"
      onChangeText={(text)=>{setinput(text)}} >
       </TextInput> */}
        {/* <DateTimePicker
        isVisible={input}
        date={date}
        onConfirm={value=>{
          setinput(false)
          setdate(value)
          var a=value.toLocaleDateString
          console.log(a)
        }}
        onCancel={handle}
        
        ></DateTimePicker> */}
      </View>
      <TouchableOpacity onPress={submit}>
        <Text style={{
          color: "white",
          marginTop: 50,
          backgroundColor: "green",
          fontSize: 20
        }}>
          Submit
        </Text>
      </TouchableOpacity>
      <View style={{
        backgroundColor: "white",
        flexDirection: "row",
        marginTop: 100
      }}>

        <RadioButton
          value="30"
          status={checked === '30' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('30')}
        />
        <Text style={{
          fontSize: 20,
          marginTop: 5
        }}>30</Text>
        <RadioButton
          value="60"
          status={checked === '60' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('60')}
        />
        <Text style={{
          fontSize: 20,
          marginTop: 5
        }}>60</Text>
        <RadioButton
          value="90"
          status={checked === '90' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('90')}
        />
        <Text style={{
          fontSize: 20,
          marginTop: 5
        }}>90</Text>
      </View>

      <View
        style={{
          backgroundColor: "green",
          height: 250,
          width: 300,
          borderRadius: 20,
          marginTop: 70
        }}>
        <Text style={{
          marginTop: 30,
          color: "white",
          fontSize: 20,
          fontWeight: "bold"
        }}> TOTAL DAYS           : {ans} days</Text>
        {/* <Text style={{
          marginTop:30,
          color:"white",
          fontSize:20,
          fontWeight:"bold"
        }}> CALCULATE DAY   : {}</Text> */}
        <Text style={{
          marginTop: 30,
          color: "white",
          fontSize: 20,
          fontWeight: "bold"
        }}> TOTAL VALUE        : {checked}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
