import { Container, Heading } from '@chakra-ui/react';
import { TaskListWidget } from '../../widgets';

export const TaskListPage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Heading size="md" margin={10}>
        Your Tasks
      </Heading>
      <TaskListWidget />
    </Container>
  );
};
