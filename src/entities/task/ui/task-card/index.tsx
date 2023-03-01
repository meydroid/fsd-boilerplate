import { Box, Checkbox, Heading, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { Task } from '../../model';

type TaskCardProps = {
  task: Task;
  onClick(task: Task): void;
};

export const TaskCard = observer(({ task, onClick }: TaskCardProps) => {
  const handleCheckboxClick = () => {
    onClick(task);
  };
  return (
    <Box key={task.id} alignItems="center" display="flex">
      <Checkbox isChecked={task.completed} size="lg" onChange={handleCheckboxClick} />
      <Box marginLeft={5}>
        <Heading size="xs" textTransform="uppercase">
          {task.header}
        </Heading>
        <Text pt="2" fontSize="sm">
          {task.body}
        </Text>
      </Box>
    </Box>
  );
});
