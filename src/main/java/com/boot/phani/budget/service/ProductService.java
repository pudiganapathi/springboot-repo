package com.boot.phani.budget.service;

import java.util.List;

import com.boot.phani.domain.Product;

public interface ProductService {
	
	Product findByName(String name);
		
	List<Product> findAllProducts();

	Product findById(Long productId);
	

}
