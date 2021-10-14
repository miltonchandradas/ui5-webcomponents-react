import { useConsolidatedRef } from '@ui5/webcomponents-react-base/dist/useConsolidatedRef';
import { StandardListItem, StandardListItemPropTypes } from '@ui5/webcomponents-react/dist/StandardListItem';
import { VariantManagementContext } from '@ui5/webcomponents-react/dist/VariantManagementContext';
import { Ui5DomRef } from '@ui5/webcomponents-react/interfaces/Ui5DomRef';
import React, { forwardRef, Ref, useContext, useEffect } from 'react';

export interface VariantItemPropTypes extends Omit<StandardListItemPropTypes, 'children' | 'onDetailClick'> {
  /**
   * The name of the variant.
   */
  children: string;
  /**
   * Author of the variant.
   */
  author?: string;
  /**
   * Indicates if favorites can be created.
   */
  favorite?: boolean;
  /**
   * Indicator if a variant is visible for all users (public flag is set).
   */
  global?: boolean;
  /**
   * Indicator if it's the default variant.
   */
  isDefault?: boolean;
  /**
   * Indicates if the variant title can be changed.
   */
  labelReadOnly?: boolean;
  /**
   * Indicates if the variant should be applied automatically on selection.
   */
  applyAutomatically?: boolean;
  /**
   * If set to false, the user is allowed to change the item's data.
   *
   * __Note:__ When set to true, no "Save" button will be displayed for the the `VariantItem` when the `VariantManagement` is in `dirtyState`.
   */
  readOnly?: boolean;
  /**
   * Indicates if the variant can be deleted.
   *
   * __Note:__ If not set, a delete button is shown for all variants except for variants with `global={true}`.
   */
  hideDelete?: boolean;
}

/**
 * The `VariantItem` describes a variant/view of the `VariantManagement` component.
 */
const VariantItem = forwardRef((props: VariantItemPropTypes, ref: Ref<Ui5DomRef>) => {
  const {
    isDefault,
    author,
    favorite,
    global,
    labelReadOnly,
    applyAutomatically,
    readOnly,
    selected,
    children,
    hideDelete
  } = props;
  const { selectVariantItem } = useContext(VariantManagementContext);
  const consolidatedRef = useConsolidatedRef<any>(ref);
  useEffect(() => {
    if (selected) {
      selectVariantItem({ ...props, variantItem: consolidatedRef.current });
    }
  }, [selected]);

  return (
    <StandardListItem
      {...props}
      ref={consolidatedRef}
      data-is-default={isDefault}
      data-author={author}
      data-favorite={favorite}
      data-global={global}
      data-label-read-only={labelReadOnly}
      data-apply-automatically={applyAutomatically}
      data-read-only={readOnly}
      data-children={children}
      data-hide-delete={hideDelete}
    />
  );
});

VariantItem.displayName = 'VariantItem';

export { VariantItem };