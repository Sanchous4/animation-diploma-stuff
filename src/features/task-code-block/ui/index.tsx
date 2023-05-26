import { CodeBlock, a11yLight } from 'react-code-blocks';
import { Box, styled } from '@mui/material';

const pythonCode = `
n = int(input())
 
factorial = 1
 
for i in range(2, n+1):
    factorial *= i
 
print(factorial)
`;

const Root = styled(Box)`
  padding: 16px 24px 16px 24px;
  box-shadow: 0px 0px 0px 1px #e0e0e0;
  border-radius: 10px;
  height: 300px;
  overflow: auto;
  min-width: 300px;
`;

interface ITaskCodeBlock {
  code?: string
  [key: string]: any
}
export const TaskCodeBlock = ({code = pythonCode, ...others}: ITaskCodeBlock) => {
  return (
    <Root {...others}>
      <CodeBlock
        language='python'
        text={code}
        showLineNumbers={false}
        theme={a11yLight}
        wrapLines={true}
        codeBlock
      />
    </Root>
  );
};
