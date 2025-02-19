package kanbanboard.controller.api;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kanbanboard.domain.Card;
import kanbanboard.domain.Task;
import kanbanboard.dto.JsonResult;
import kanbanboard.repository.CardRepository;
import kanbanboard.repository.TaskRepository;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/kanbanboard")
public class ApiController {

	private final CardRepository cardRepository;
	private final TaskRepository taskRepository;

	public ApiController(CardRepository cardRepository, TaskRepository taskRepository) {
		this.cardRepository = cardRepository;
		this.taskRepository = taskRepository;
	}
	
	@GetMapping("/card")
	public ResponseEntity<JsonResult<List<Card>>> read(){
		log.info("Request[Get /kanbanboard/card]");
		List<Card> Cards = cardRepository.findAll(); 
		
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(Cards)); 
	}
	
	@GetMapping("/task")
	public ResponseEntity<JsonResult<List<Task>>> read(@RequestParam Long cardNo){
		log.info("Request[Get /kanbanboard/task?CardNo={}]" ,cardNo);
		List<Task> Tasks = taskRepository.findAllByCardNo(cardNo);
		
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(Tasks));
	}
	
	@PostMapping("/task")
	public ResponseEntity<JsonResult<Task>> create(@RequestBody Task task){
		log.info("Request[Post /kanbanboard/task]" );
		
		Boolean result = taskRepository.insert(task);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(task));
	}

}
