import PageModal from "components/modal/pageModal";
import Tagitem from "components/table/tagItem";
import { useModal } from "hooks/useModal";

export default function TagItemGroup({ tags, keyword, width = '250px' }: any) {
  const [isOpenTagModal, openTagModal, closeTagModal] = useModal()
  return (<>
    {isOpenTagModal &&
      <PageModal
        title='All Items'
        width={width}
        isOpen={isOpenTagModal}
        closeModal={closeTagModal}
      >
        {tags.map((item: any, index: number) => <Tagitem title={item[keyword] || item} key={index} />)}
      </PageModal>}
    {tags[0] && <Tagitem title={tags[0][keyword] || tags[0]} />}
    {tags[1] && <Tagitem title={tags[1][keyword] || tags[1]} />}
    {tags[2] && <Tagitem title={tags[2][keyword] || tags[2]} />}
    {tags[4] && <Tagitem title={'...'} clickEvent={openTagModal} />}
  </>)
}