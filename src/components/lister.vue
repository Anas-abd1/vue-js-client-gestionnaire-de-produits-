<template>
    <div class="container" style="padding-top : 50px ;">
        <table class="table">
            <thead>
                <th>id</th>
                <th>nom</th>
                <th>prix</th>
                <th>date</th>
                <th>modifier</th>
                <th>suprimer</th>
            </thead>
            <tbody>
                <tr v-for = "(i, index) in data " :key="i.idProduit">
                    <td>{{i.idProduit}}</td>
                    <td>{{i.nomProduit}}</td>
                    <td>{{i.prixProduit}}</td>
                    <td>{{i.dateCreation}}</td>
                    <td>
                        <router-link :to="`/modifier/${i.idProduit}`"> <button class="btn btn-dark btn-sm" href="">modifier</button></router-link>
                    </td>
                    <td>
                        <button @click="supProduit(index,i.idProduit)" class="btn btn-dark btn-sm" href="">suprimer</button>
                    </td>
                

                </tr>
            </tbody>
        </table>
        <hr>
        

    </div>
    
</template>
<script>
import axios from 'axios' ;

export default {

    data(){
        return {
            data : []
        }
    } ,
    mounted(){
        axios.get('http://127.0.0.1:8080/produits/api')
        .then((rep)=>{
            this.data=rep.data
    })},methods:{
        supProduit(index,id){
                this.data.splice(index, 1);
                axios.delete('http://127.0.0.1:8080/produits/api/'+id,{
                    idProduit:id
                })
            }
        }


}
</script>