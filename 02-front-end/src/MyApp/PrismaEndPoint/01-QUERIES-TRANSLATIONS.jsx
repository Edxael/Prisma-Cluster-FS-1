
01- Review the P.O.S. Documentation on the PlayGround: https://us1.prisma.sh/public-gossamerhealer-739/prismaTest2/dev
02- Copy to this file and translate using examples
03- Tested on PlayGround
04- Translate to: apollo-boost --> client.mutate({ ... })






===[ Create User ]================================

createUser(
    data: UserCreateInput!
    ): User!

- - - - - - - - - - - - - - - - - - - - - - - - - 

mutation{
  
    createUser(
      data: { name: "Leo Dan" }
        ){
          id
          name
        }
    
  }

- - - - - - - - - - - - - - - - - - - - - - - - - 

let temp1 = await client.mutate({
    mutation: gql`
    mutation{
        createUser(data: { name: "${this.state.singerName}" }){
          id
          name
        }
      }
    `}).then((result) => { return result.data.createUser } )

await console.log("La Data: ", temp1 )

==================================================





===[ Delete User ]================================

deleteUser(
    where: UserWhereUniqueInput!
    ): User

- - - - - - - - - - - - - - - - - - - - - - - - - 

mutation{
  
    deleteUser(
      where: { id: "cjgg94m9paj700b25x1vvs31u" }
        ){
          id
          name
        }
    
  }

- - - - - - - - - - - - - - - - - - - - - - - - - 

let temp1 = await client.mutate({
    mutation: gql`
    mutation{
        deleteUser(where: { id: "${this.state.singerId}" }){
          id
          name
        }
      }
    `}).then((result) => { return result.data.createUser } )

await console.log("User Deleted: ", temp1 )

==================================================







===[ Update User ]================================

updateUser(
  data: UserUpdateInput!
  where: UserWhereUniqueInput!
  ): User
  

- - - - - - - - - - - - - - - - - - - - - - - - - 

mutation{
  
  updateUser(
      data: { name: "Leo Dan" }
      where: { id: "cjgg94m9paj700b25x1vvs31u" }
        ){
          id
          name
        }
    
  }

- - - - - - - - - - - - - - - - - - - - - - - - - 

let temp1 = await client.mutate({
  mutation: gql`
  mutation{
    updateUser(
        data: { name: "Leo Dan" }
        where: { id: "cjgg94m9paj700b25x1vvs31u" }
          ){
            id
            name
          }
    }
  `}).then((result) => { return result.data.createUser } )

await console.log("User Deleted: ", temp1 )

==================================================