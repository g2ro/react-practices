package ajax.domain;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor // new Item() 
@AllArgsConstructor // new Item(param1, param2, param3)
@RequiredArgsConstructor //NonNull이 붙어 있는 파라미터만 존재하는 생성자를 만들어줌
@EqualsAndHashCode(exclude = {"type", "name", "image"}) // 동질성을 비교할 때, 특정 항목이 같으면 동질성이 같다라고 할 지 정하는 역할
public class Item {
	@NonNull
	private Long id;

	@NonNull
	private String type;

	@NonNull
	private String name;

	private String image;
	
	public Item(Long id) {
		this.id = id;
	}

}