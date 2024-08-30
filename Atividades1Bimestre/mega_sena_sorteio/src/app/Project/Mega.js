import React, {Component} from 'react'
import {Text, TextInput, Button} from 'react-native'
import styles from './Style'
import MegaNumero from './MegaNumero'

export default class Mega extends Component {
  state = {
            qtdeNums: this.props.qtdeNums,
            numeros: []
        }

    // constructor(props){
    //     super(props)
    //     this.alterarQtdeNum = this.alterarQtdeNum.bind(this)
    // } //Fazendo isso, conseguimos fazer o código olhar para o objeto correto ao executar, porém de forma mais verbosa

    alterarQtdeNum = (qtde) => {
        this.setState({qtdeNums: +qtde})
    } // Temos a forma menos verbosa de fazer a mesma questão acima, pois a Arrow Function não muda o apontamento da instancia de this.

    gerarNumNaoContido = nums => {
        const novo = parseInt(Math.random() * 60)  + 1
        return nums.includes(novo) ? this.gerarNumNaoContido(nums) : novo
    } //função recursiva

    gerarNums = () => {
        const numeros = Array(this.state.qtdeNums).fill().reduce(n => [...n, this.gerarNumNaoContido(n)] ,[]).sort((a, b) => a - b) //Gerando numeros e organizando eles do menor para o maior
        this.setState({numeros})
    }

    exibirNumeros =() => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num}/>
        })
    }

    render(){
        return (
            <>
            <Text style={styles.txtG}>Gerador de Mega-Sena </Text>
            <TextInput style={{
                borderBottomWidth: 1,
            }}
            keyboardType={'numeric'}
            placeholder="Números" value={`${this.state.qtdeNums}`} onChangeText={this.alterarQtdeNum}></TextInput>
            <Button title='Gerar' onPress={this.gerarNums}/>
            <Text> {this.exibirNumeros()} </Text>
            </>
        )
    }
}
