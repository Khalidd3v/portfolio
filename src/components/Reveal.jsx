import useReveal from '../hooks/useReveal';

const Reveal = ({ children, className = '', as: Tag = 'div', ...props }) => {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export default Reveal;
