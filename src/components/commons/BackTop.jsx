import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
const BackTop = () => (
    <div className="backto-top">
    <ScrollToTop showUnder={160}>
        <FiChevronUp />
    </ScrollToTop>
</div>
)
export default BackTop