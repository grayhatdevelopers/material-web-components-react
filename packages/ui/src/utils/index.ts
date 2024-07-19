export const matchVariant = (str: string, variantStr: string, componentName?: string) => {
    let strippedVariantStr = variantStr
    if (!componentName) {
        strippedVariantStr = variantStr.split("-").filter(Boolean).slice(1, -1).join("-").trim()
    }
    else {
        strippedVariantStr = variantStr.replaceAll(componentName, "").split("-").filter(Boolean).slice(1).join("-").trim()
    }
    return (str === variantStr || str === strippedVariantStr)
}