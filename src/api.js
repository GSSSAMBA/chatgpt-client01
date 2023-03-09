export const fetchResponse = async (chat) => {
    try {

        // const response = await fetch('https://localhost:3080/', {
        // const response = await fetch('http://localhost:3080/', {
        // const response = await fetch('http://localhost:3080/', {
        const response = await fetch('https://chatgpt-server01.vercel.app/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
                message: chat.map((message) => message.message).join(" \n ")
            })
        })

        const data = await response.json()

        return data

    } catch (error) {
        console.log(error);
    }
}

// export const Response = async (chat) => {
//     try {
//       const response = await fetch('http://localhost:3080/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           message: chat.map((message) => message.message).join(' \n ')
//         })
//       })
  
//       const text = await response.text()
//       const data = JSON.parse(text)
  
//       return data
//     } catch (error) {
//       console.log(error)
//     }
//   }
  