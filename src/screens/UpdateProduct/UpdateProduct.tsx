import { Text, View } from "react-native"
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import UpdateProductForm from "../../components/Forms/UpdateForm";
import { styles } from "./styles";

export default function UpdateProduct() {
    const { product } = useSelector((state: RootState) => state.product);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Editar Produto</Text>
            <UpdateProductForm product={product!} />
        </View>
    )
}