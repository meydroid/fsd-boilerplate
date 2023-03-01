import { Card, CardBody, Stack, StackDivider } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { TaskCard, TaskStore } from '../../entities/task';

const store = new TaskStore();

export const TaskListWidget = observer(() => {
  return (
    <Card textAlign="left" size="md">
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {store.tasks.map((task) => (
            <TaskCard task={task} onClick={store.toggleTask} key={task.id} />
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
});
