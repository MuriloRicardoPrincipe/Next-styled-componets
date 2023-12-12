import Box from "@src/components/Box/Box";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Text from "@src/components/Text/Text";
import Footer from "./patterns/Footer/Footer";

export default function HomeScreen(){
    return(
    <Box 
        tag="main"
        styleSheet={{
            backgroundColor:'grey',
            flex:1,
            alignItems: 'Center'
        }}
    >
        <Background/>
        <Menu/>
        <Feed>
            <Feed.Header/>
            <Text tag="h1" variant="display1">
                Ultimas att
            </Text>
            <Feed.Post/>
        </Feed>
        <Footer/>
    </Box>
    )
}