import {
    Text,
    TouchableOpacity,
    View } from "react-native";
import { useEffect } from "react";
import {Link, router, useLocalSearchParams} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
    return (
        <View style={{
            flex:1,
            justifyContent: "center",
            alignItems: "center",
        }}
    >
            <Link href="/sign-in">SignIn</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/properties/1">property</Link>
        </View>
    );
}
