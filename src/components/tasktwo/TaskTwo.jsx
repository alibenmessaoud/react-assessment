import React from 'react';
import { Content, Heading, Task } from '@components/styled-components/Task';
import { DeleteFilesModal } from '@components/tasktwo/DeleteFilesModal';
import { AlwaysLoadingModal } from '@components/tasktwo/AlwaysLoadingModal';
import { DeleteReportModal } from '@components/tasktwo/DeleteReportModal';

const TaskTwo = () => (
  <Task>
    <Heading>Task Two</Heading>
    <Content>
      <AlwaysLoadingModal />
      <br />
      <DeleteFilesModal />
      <br />
      <DeleteReportModal />
      <br />
    </Content>
  </Task>
);
export default TaskTwo;
