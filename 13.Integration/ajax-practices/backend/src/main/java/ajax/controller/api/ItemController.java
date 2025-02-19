package ajax.controller.api;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import ajax.domain.Item;
import ajax.dto.JsonResult;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/item")
public class ItemController {
	private final List<Item> items;

	public ItemController(@Qualifier("items") List<Item> items) {
		this.items = items;
	}
	
	@PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
	public ResponseEntity<JsonResult<Item>> create(Item item, MultipartFile file){
		log.info("Request[GET /item, Content-Type: multipart/form-data][{}, {}]", item, file.getOriginalFilename());
		try {
			final String saveFileName = UUID
					.randomUUID()
					.toString()
					.concat(".")
					.concat(file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf('.') + 1));
			
//			Files.createDirectories(Paths.get("/User/kilho/ajax-practices-uploads/images")).resolve(saveFileName); // 디렉토리 생성후 path 객체를 반환한다.
			
			Files.write(Files.createDirectories(Paths.get("/Users/kilho/ajax-practices-uploads/images"))
					.resolve(saveFileName), file.getBytes());
			
			Long maxId = Optional
					.ofNullable(items.isEmpty() ? null : items.getFirst())
					.map(t -> t.getId())
					.orElse(0L);
				
				
				item.setId(maxId + 1);
				item.setImage("/assets/images/" + saveFileName);
				items.addFirst(item);
				
			return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(item));
		}catch(Exception ex) {
			throw new RuntimeException(ex);
		}
	}
	
	@PostMapping
	public ResponseEntity<JsonResult<Item>> create(@RequestBody Item item){
		log.info("Request[GET /item, Content-Type: application/json][{}]", item);
		
		Long maxId = Optional
			.ofNullable(items.isEmpty() ? null : items.getFirst())
			.map(t -> t.getId())
			.orElse(0L);
		
//		Long maxId = items.getFirst().getId();
		
		item.setId(maxId + 1); 
		items.addFirst(item);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(item));
	}
	
	@GetMapping
	public ResponseEntity<JsonResult<List<Item>>> read(){
		log.info("Request[GET /item]");
		
		return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(items));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<JsonResult<Item>> read(@PathVariable Long id){
		log.info("Request[GET /item/{}]", id);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(items.stream().filter(t -> t.getId() == id).findAny().orElse(null)));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<JsonResult<Item>> update(@PathVariable Long id, Item item){ // id는 path로 item은 url
		log.info("Request[PUT /item, Content-Type: application/x-www-form-urlencoded][{}]", id, item);
		
//		int index = items.indexOf(new Item(id)); // 동일객체를 찾는데 이때 @EqualsAndHashCode때문에 객체의 주소가 다르더라도 찾을 수 있다.
//		Item itemUpdate = items.get(index); // 객체 자체를 바꾸는 방법이 있지만 현재는 객체를 래퍼런싱 후 해당 객체에 값을 바꾸는 형태로 진행함
//		itemUpdate.setName(item.getName()); 
//		itemUpdate.setType(item.getType());
		
		int index = items.indexOf(new Item(id));
		Optional<Item> optionalItem =Optional.ofNullable(index == -1 ? null : items.get(index));
		optionalItem.ifPresent((Item t) -> {
			t.setName(item.getName());
			t.setType(item.getType());
		});
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(optionalItem.orElse(null)));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<JsonResult<Long>> delete(@PathVariable Long id){
		log.info("Request[DELETE /api/{}]", id);
		
//		items.remove(new Item(id)); // @EqualsAndHashCode을 응용하여 삭제하는 방식
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(items.removeIf((t) -> t.getId() == id) ? id : -1));
		
	}
}
