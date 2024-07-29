import React from 'react';

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


export function findSlotProp(
    children: React.ReactNode,
    slotName: string,
    findAll = false
  ) {
    const foundElements: React.ReactNode[] = [];
  
    // @ts-ignore
    function searchChildren(childrenArray: React.ReactNode) {
      for (let child of React.Children.toArray(childrenArray)) {
        // @ts-ignore
        if (child.props && child.props.slot === slotName) {
          if (!findAll) {
            return child; // Return the first found instance immediately
          }
          foundElements.push(child);
        }
        // @ts-ignore
        if (child.props && child.props.children) {
          // @ts-ignore
          const found = searchChildren(child.props.children);
          if (found && !findAll) {
            return found; // Return immediately if the first instance is found
          }
        }
      }
      return null; // Return null if no instance is found
    }
  
    const result = searchChildren(children);
    return findAll ? foundElements : result;
}

export function removeSlotProps(
    children: React.ReactNode,
    slotNames: string[]
  ): React.ReactNode {
    // Helper function to recursively search and filter children
    function filterChildren(childrenArray: React.ReactNode): React.ReactNode {
      return React.Children.map(childrenArray, child => {
        if (React.isValidElement(child)) {
          if (slotNames.includes(child.props.slot)) {
            // Skip this child as it matches one of the slot names
            return null;
          }
          if (child.props.children) {
            // Recursively filter the child elements
            const filteredChildren = filterChildren(child.props.children);
            // Return the child with filtered children
            return React.cloneElement(child, { ...child.props, children: filteredChildren });
          }
        }
        // Return the child as it doesn't match any slot name
        return child;
      });
    }
  
    // Start filtering from the top-level children
    return filterChildren(children);
  }